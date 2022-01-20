const Modal = ({ setOpenModal }) => {
  return (
    <>
      <div className="modal-background">
        <div className="modal-container">
          <div className="flex flex-row">
            <img
              src="https://www.manomano.fr/assets/_next/static/images/logo-61691a0317c2cf7790dade8b40c200bc.png"
              alt="manomano"
            />
          </div>
          <div>Bienvenue dans votre espace Pro</div>
        </div>
      </div>
      <div className="flex flex-row ">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
          id="modal-cancel-btn"
        >
          CONTINUER
        </button>
      </div>
    </>
  );
};

export default Modal;
