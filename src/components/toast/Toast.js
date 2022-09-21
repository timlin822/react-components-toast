import {FaTimes} from 'react-icons/fa';

import './Toast.css';

const Toast=({toastIsOpen,toast,toastCloseHandler})=>{
    return (
        <div className={toastIsOpen?`toast toast-${toast.type} toast-open`:`toast toast-${toast.type} toast-close`}>
            <div>
                <h2 className="toast-title">{toast.title}</h2>
                <p className="toast-message">{toast.message}</p>
            </div>
            <FaTimes className="close-icon" onClick={toastCloseHandler} />
        </div>
    );
}

export default Toast;