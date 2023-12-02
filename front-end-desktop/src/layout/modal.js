import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export default function useModal(isModalVisible, hideErrorModal, text, buttonText) {
  const modalStyle = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "400px",
    margin: "auto",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
  };

  const textStyles = {
    marginBottom: "20px",
    color: "gray",
  };

  const buttonStyles = {
    backgroundColor: "green",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  const handleButtonClick = () => {
    hideErrorModal();
  };

  return (
    <Modal open={isModalVisible} onClose={hideErrorModal} center closeIcon styles={{ modal: modalStyle }}>
      <div>
        <p style={textStyles}>{text}</p>
        <button style={buttonStyles} onClick={handleButtonClick}>
          {buttonText}
        </button>
      </div>
    </Modal>
  );
}
