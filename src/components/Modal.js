import React from 'react';
import './Modal.css';
import { hideModal } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
const Modal = (props) => {
    const onCloseButtonClick = (e) => {
        console.log(props);
        dispatch(hideModal());
    };
    const dispatch = useDispatch();
    const modalState = useSelector((state) => {
        console.log("inside use slector", state);
        return state;
    });
    if (modalState.modalReducer.showModal) {
        return (
            <div className="modal-overlay">
                <div className="modal">
                    <span className="modal-close" onClick={onCloseButtonClick}>
                        &#10005; {/* HTML code for a multiplication sign */}
                    </span>
                    I am a modal
                </div>
            </div>

        )
    } else {
        return null;
    }

};

export default Modal;