import React from 'react';
import {Modal} from 'react-native';

import{
    ModalButton,
    ModalContainer,
    ModalView,
    StyledInput,
    ModalAction,
    ModalActionGroup,
    ModalIcon,
    HeaderTitle,
    colors
} from '../styles/appStyles';

import {AntDesign} from '@expo/vector-icons';


const InputModal = ({
                    modalVisible,
                    setModalVisible,
                    todoInputValue,
                    setTodoInputValue,
                    handleAddTodo,
                    comics,
                    setComicAEditar,
                    handleEditComic
                }) => {

    const handleClose = () => {
        setModalVisible(false);
        setTodoInputValue("");
        setComicAEditar(null);
    }

    const handleSubmit = () => {

        if(!setComicAEditar){
            alert("Se ha añadido un nuevo comic");
            handleAddTodo({
                title: todoInputValue,
                date: new Date().toUTCString(),
                key: `${(comics[comics.length-1] && parseInt(comics[comics.length-1].key)+1 || 1)}`,
            });
        }else{
            handleEditComic({
                title: todoInputValue,
                date: setComicAEditar.date,
                key: setComicAEditar.key
            })
        }
        setTodoInputValue(""); 
    }

    return(
        <>
            <ModalButton onPress={() => {setModalVisible(true)}}>
                <AntDesign name="plus" size={30} color={colors.primary}/>
            </ModalButton>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => handleClose()}
            >
                <ModalContainer>
                    <ModalView>
                    <ModalIcon>
                        <HeaderTitle>Introduce comic</HeaderTitle>
                        <AntDesign name="edit" size={30} color={colors.tertiary} />
                    </ModalIcon>

                    <StyledInput 
                        placeholder = "Add a comic"
                        placeholderTextColor={colors.alternative}
                        selectionColors={colors.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setTodoInputValue(text)}
                        value={todoInputValue}
                        onSubmitingEditing={handleSubmit}
                    />
                    <ModalActionGroup>
                        <ModalAction color={colors.primary} onPress={handleClose}>
                            <AntDesign name="close" size={28} color={colors.secondary} />
                        </ModalAction>
                        <ModalAction color={colors.primary} onPress={handleSubmit}>
                            <AntDesign name="edit" size={28} color={colors.secondary} />
                        </ModalAction>
                    </ModalActionGroup>
                    </ModalView>
                </ModalContainer>
            </Modal>
        </>
    );
}

export default InputModal;