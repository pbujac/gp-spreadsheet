import React from 'react';

import style from './Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Button/Button';

const Modal = ({ showModal, title, subtitle, children, onCloseModal }) => {
  if (showModal) {
    return (
      <section className={style.modal}>
        <div className={style.content}>
          <div className={style.header}>
            <h3>{title}</h3>
            <Button onClick={onCloseModal}>
              <FontAwesomeIcon icon="times" />
            </Button>
          </div>
          <p className={style.subtitle}>{subtitle}</p>
          <div className={style.children}>
            {children}
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default Modal;
