import { MdClose } from "react-icons/md";
import StyledModal from "./styled";
import { ReactNode } from "react";

interface Props {
    title: string;
    children: ReactNode;
}

export default function Modal({ title, children }: Props) {
    return (
        <StyledModal>
            <section className="content-container">
                <h1>{title}</h1>
                <button type="button" className="modal-close-btn">
                    <MdClose />
                </button>
                {children}
            </section>
        </StyledModal>
    );
}
