import React from "react";
import PropTypes from 'prop-types';
import {AiOutlineDelete} from 'react-icons/ai';
import LocaleContext from "../contexts/LocaleContext";

function NoteItemDeleteButton({ id, onDelete }) {
    const { locale } = React.useContext(LocaleContext);

    return (
        <AiOutlineDelete title={locale === 'id' ? 'Hapus' : 'Delete'} className="note-item__delete-button" size={45} onClick={() => onDelete(id)} />
    )
}

NoteItemDeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default NoteItemDeleteButton;