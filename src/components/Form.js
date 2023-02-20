import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = evt => {
    evt.preventDefault();
    if (value.trim()) {
      firebase.addNote(value.trim()).then(() => {
        alert.show('Note have been added', 'success');
      }).catch(() => {
        alert.show('Something went horribly wrong :(', 'danger')
      });

      setValue('');
    } else {
      alert.show('Enter note title');
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter note title"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
