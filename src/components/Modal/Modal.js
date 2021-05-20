import * as React from "react";
import Portal from "../../Portal";
import {
    ModalBack,
    ModalContainer,
    ModalBox,
    ModalCloseButton,
} from "./Modal_Wrapper";

const Modal = React.forwardRef(({ children }, ref) => {
    const [visibility, setVisibility] = React.useState(false);

    React.useImperativeHandle(ref, () => {
        return {
            openModal: () => handleOpen(),
            closeModal: () => handleClose(),
        };
    });

    const handleOpen = () => {
        setVisibility(true);
    };

    const handleClose = () => {
        setVisibility(false);
    };

    if (visibility) {
        return (
            <Portal>
                <ModalBack></ModalBack>
                <ModalContainer>
                    <ModalBox>
                        <ModalCloseButton onClick={handleClose} />
                        {children}
                    </ModalBox>
                </ModalContainer>
            </Portal>
        );
    }

    return null;
});

export default Modal;
