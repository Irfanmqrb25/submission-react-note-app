import React from "react";
import NoteContent from './NoteContent';
import NoteDeleteButton from './NoteDeleteButton';
import NoteArchiveButton from './NoteArchiveButton';


function NoteItem({ title, body, id, onDelete, onArchieve, isarchieve }) {
    return (
        <div className="note-item">
            <NoteContent title={title} body={body} />
            <div className="note-item__action">
                <NoteDeleteButton id={id} onDelete={onDelete} />
                <NoteArchiveButton id={id} onArchive={onArchieve} isArchived={isarchieve} />
            </div>
        </div>
    )
}

export default NoteItem;