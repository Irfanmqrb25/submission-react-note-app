import React from "react";

function NoteDeleteButton({ id, onDelete }) {
    return <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
}

export default NoteDeleteButton;