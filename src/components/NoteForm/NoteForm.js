import { useState } from "react";
import "./NoteForm.css";
import { useDispatch } from "react-redux";
import { noteActions } from "../../redux/reducers/noteReducer";

function NoteForm() {
  const [NoteText, setNoteText] = useState("");
  const disptach = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    disptach(noteActions.add(NoteText));

    setNoteText("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          className="form-control mb-3"
          value={NoteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
