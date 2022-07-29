import React, { Fragment } from "react";
import styles from "./Modal.module.css";

const Modal = ({show ,closeModal, children}) => {

    return ( 
            <Fragment>
                <div className = {`${styles.backDrop} ${show ? styles.show : null}` } onClick ={closeModal} ></div>
                <div className =  {`${styles.overlay} ${show ? styles.showOverlay : null}` }>
                    {children}
                    

                </div>
            </Fragment> 
        
    );
}
 
export default Modal;