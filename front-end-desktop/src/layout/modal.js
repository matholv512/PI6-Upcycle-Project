import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export default function useModal(isModalVisible, hideErrorModal, text, buttonText) {
    return (
        <Modal open={isModalVisible} onClose={hideErrorModal} center>
            <div>
              <p>{text}</p>
              <button onClick={hideErrorModal}>{buttonText}</button>
            </div>
          </Modal>
    )
}

//Usuário ou senha incorretos
//Tentar novamente