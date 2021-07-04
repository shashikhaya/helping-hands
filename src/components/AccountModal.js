import { useState } from "react";
import Modal from "react-modal";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AccountModal = ({ IsOpen, onClose, onLoginFormSubmit }) => {
  const [active, setActive] = useState("login");

  return (
    <Modal isOpen={IsOpen} onRequestClose={onClose} style={customStyles}>
      <div className="absolute right-4 top-4">
        <button
          className="bg-transparent border border-transparent"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {active === "login" && (
        <LoginForm
          onRegisterClick={() => setActive("register")}
          onClose={onClose}
          onFormSubmit={onLoginFormSubmit}
        />
      )}
      {active === "register" && (
        <RegistrationForm
          onLoginClick={() => setActive("login")}
          onClose={onClose}
        />
      )}
    </Modal>
  );
};

export default AccountModal;
