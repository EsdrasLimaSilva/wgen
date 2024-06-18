import { MdClose } from "react-icons/md";
import StyledModal from "./styled";

export default function Modal() {
    return (
        <StyledModal>
            <section className="content-container">
                <header>
                    <h1>Modal Title</h1>
                    <button type="button" className="modal-close-btn">
                        <MdClose />
                    </button>
                </header>
                <main>
                    <p>This is a random content</p>
                </main>
            </section>
        </StyledModal>
    );
}
