import { Root, createRoot } from "react-dom/client";
import Modal from "../components/Modal";
import ConfirmationModal from "../components/ConfirmationModal";

class Notification {
    static modalRoot: Root;

    static {
        const modalContainer = document.getElementById("modal-root")!;
        this.modalRoot = createRoot(modalContainer);
    }

    static async confirm(title: string, message: string) {
        const ok = await new Promise<boolean>((resolve) => {
            this.modalRoot.render(
                <ConfirmationModal
                    title={title}
                    message={message}
                    onConfirm={() => resolve(true)}
                    onCancel={() => resolve(false)}
                />
            );
        });
        this.modalRoot.render(null);
        return ok;
    }
}

export default Notification;
