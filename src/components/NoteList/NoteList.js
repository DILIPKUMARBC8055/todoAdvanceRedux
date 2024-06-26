import { useDispatch, useSelector } from "react-redux";
import "./NoteList.css";
import { noteActions, noteSelector } from "../../redux/reducers/noteReducer";

function NoteList() {
  const notes = useSelector(noteSelector);
  const disptach = useDispatch();
  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                disptach(noteActions.remove(index));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
