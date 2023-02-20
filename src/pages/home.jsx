import React, {useContext, useEffect} from "react";
import { Form } from "../components/Form";
import { Loader } from "../components/Loader";
import { Notes } from "../components/Notes";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export const Home = () => {

  const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);
  const alert = useContext(AlertContext);

  const onRemoveNote = (id) => {
    removeNote(id);
    alert.show('Note have been deleted', 'success');
  }

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, [])

  return (
    <React.Fragment>
      <Form />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} onRemove={onRemoveNote}/>}
    </React.Fragment>
  );
};
