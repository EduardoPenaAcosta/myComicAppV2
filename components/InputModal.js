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
                    comicInputValue,
                    setComicInputValue,
                    handleAddComic,
                    comics,
                    setComicAEditar,
                    handleEditComic,
                    title,
                    handleTitle
                }) => {

    const handleClose = () => {
        setModalVisible(false);
        setComicInputValue("");
        setComicAEditar(null);
    }

    const handleSubmit = () => {

        if(!setComicAEditar){
            alert("Se ha añadido un nuevo comic");
            handleAddComic({
                title: todoInputValue,
                key: `${Math.random()*1}`,
            });
        }else{
            handleEditComic({
                title: comicInputValue,
                key: setComicAEditar.key
            })
        }
        setComicInputValue(""); 
    }

    return(
        <>
            <ModalButton onPress={() => {
                                        setModalVisible(true);
                                        handleTitle(false);
                                        }}>
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
                        <HeaderTitle>{title}</HeaderTitle>
                        <AntDesign name="edit" size={30} color={colors.tertiary} />
                    </ModalIcon>

                    <StyledInput 
                        placeholder = "Add a comic"
                        placeholderTextColor={colors.alternative}
                        selectionColors={colors.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setComicInputValue(text)}
                        value={comicInputValue}
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