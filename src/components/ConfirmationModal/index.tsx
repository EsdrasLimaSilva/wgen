/**
 * This modal was created to be rendered independent of any parent, so it is needed to provide any aditional context
 */
import ThemeContext from "../../contexts/ThemeContext";
import Modal from "../Modal";
import StyledConfirmationModal from "./styled";

interface Props {
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function ConfirmationModal({ title, message, onConfirm, onCancel }: Props) {
    return (
        <ThemeContext>
            <Modal title={title}>
                <StyledConfirmationModal>
                    <p>{message}</p>
                    <footer className="button-container">
                        <button type="button" onClick={onCancel}>
                            cancel
                        </button>
                        <button type="button" onClick={onConfirm}>
                            confirm
                        </button>
                    </footer>
                </StyledConfirmationModal>
            </Modal>
        </ThemeContext>
    );
}
