import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertContext } from "../context/alert/alertContext";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{enter: 500, exit: 350}}
      classNames={'alert'}
      mountOnEnter
      unmountOnExit
    >
      <div
        className={`alert alert-${alert.type || "warning"} alert-dismissible`}
      >
        <div>
          <strong>Attention!</strong>
          &nbsp;{alert.text}
        </div>
        <button
          onClick={hide}
          type="button"
          className={`btn close btn-sm btn-outline-${alert.type || "warning"}`}
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </CSSTransition>
  );
};
