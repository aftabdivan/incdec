import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './Header.css';

const Note=(props)=>{

    const DeleteNote=()=>{
        props.deleteItem(props.id);
    }

    return(
        <>
            <div className='note' >
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <button className='btn' onClick={DeleteNote}>
                <DeleteOutlineIcon className='deleteIcon'/>
                </button>
            </div>
        </>
    )

}

export default Note;