const Modal = ({ setOpenModal }) => {
  return function setOpenModal() {
    <>
      <div className="modal-background">
        <div className="modal-container">
          <div className="flex">
            <img
              src="https://www.manomano.fr/assets/_next/static/images/logo-61691a0317c2cf7790dade8b40c200bc.png"
              alt="manomano"
            />
          </div>
          <div className="font-bold text-2xl mt-6">
            Bienvenue dans votre espace Pro
          </div>
          <div className="flex">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="modal-cancel-btn"
            >
              CONTINUER
            </button>
          </div>
        </div>
      </div>
    </>;
  };
};

export default Modal;
