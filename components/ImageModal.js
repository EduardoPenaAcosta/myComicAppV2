import React from 'react';
import {Modal} from 'react-native';

import{
    ModalContainer,
    ModalView,
    ModalAction,
    ModalActionGroup,
    ModalIcon,
    HeaderTitle,
    colors
} from '../styles/appStyles';

import {AntDesign} from '@expo/vector-icons';


const ImageModal = ({
                    modalImageVisible,
                    setModalImageVisible
                }) => {

    const handleClose = () => {
        setModalImageVisible(false);
    }

    return(
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalImageVisible}
                onRequestClose={() => handleClose()}
            >
                <ModalContainer>
                    <ModalView>
                    <ModalIcon>
                        <HeaderTitle>Imagen del comic:</HeaderTitle>
                        <AntDesign name="file" size={30} color={colors.tertiary} />
                    </ModalIcon>
                    <ModalActionGroup>
                        <ModalAction color={colors.primary}>
                            <AntDesign name="close" size={28} color={colors.secondary} />
                        </ModalAction>
                    </ModalActionGroup>
                    </ModalView>
                </ModalContainer>
            </Modal>
        </>
    );
}

export default ImageModal;