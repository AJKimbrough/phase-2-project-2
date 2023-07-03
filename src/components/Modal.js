import React, { useState } from "react";


const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)
    

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }
 
    return (
        <div>
        <button onClick={openModal}>Open Modal</button>
        {isOpen && (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>
                    &times;
                </span>
                <h2>{name}</h2>
                <p>Modal Content</p>
                </div>
                </div>
        )}
        </div>
    )
                    }
export default Modal;