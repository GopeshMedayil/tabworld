import React from 'react';
import './Modal.css';
import { hideModal } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import AddClockForm from './AddClockForm';

const Modal = (props) => {
    const onCloseButtonClick = (e) => {
        ///console.log(props);
        dispatch(hideModal());
    };
    const dispatch = useDispatch();
    const modalState = useSelector((state) => {
        console.log("inside use slector", state);
        return state.modalReducer;
    });
    console.log("modalState", modalState)
    if (modalState.showModal) {
        return (
            <div className="modal-overlay">
                <div className="modal">
                    <span className="modal-close" onClick={onCloseButtonClick}>
                        &#10005; {/* HTML code for a multiplication sign */}
                    </span>
                    {modalState.modalType === 'addClock' ? <AddClockForm /> : <div>Modal</div>}
                </div>
            </div>

        )
    } else {
        return null;
    }

};

export default Modal;