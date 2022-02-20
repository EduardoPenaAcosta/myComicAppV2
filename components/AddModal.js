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


const AddModal = ({
                    modalAddVisible,
                    setModalAddVisible,
                    comicInputValue,
                    setComicInputValue,
                    handleAddComic,
                    setComicAEditar,
                    handleTitle
                }) => {

    const handleClose = () => {
        setModalAddVisible(false);
        setComicInputValue("");
        setComicAEditar(null);
    }

    const handleSubmit = () => {
        handleAddComic({
            title: comicInputValue,
            key: (setComicAEditar.length + 1),
        });
        setModalAddVisible(false);
        setComicInputValue(""); 
    }

    return(
        <>
            <ModalButton onPress={() => {
                                        setModalAddVisible(true);
                                        handleTitle(false);
                                        }}>
                <AntDesign name="plus" size={30} color={colors.primary}/>
            </ModalButton>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalAddVisible}
                onRequestClose={() => handleClose()}
            >
                <ModalContainer>
                    <ModalView>
                    <ModalIcon>
                        <HeaderTitle>Añadir comic</HeaderTitle>
                        <AntDesign name="edit" size={30} color={colors.tertiary} />
                    </ModalIcon>

                    <StyledInput 
                        placeholder = "Añade un comic"
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
                            <AntDesign name="check" size={28} color={colors.secondary} />
                        </ModalAction>
                    </ModalActionGroup>
                    </ModalView>
                </ModalContainer>
            </Modal>
        </>
    );
}

export default AddModal;