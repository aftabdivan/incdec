import React, { useState } from 'react';
import Button from '@material-ui/core/Button'; //this is version 4 
import AddIcon from '@material-ui/icons/Add';
import './Header.css';

const CreateNote=(props)=>{

    const [expand,setExpand]=useState(false);

    const [note,setNote]=useState({
        title:'',
        content:'',
    });

    const InputEvent=(event)=>{
        
        //const value=event.target.value;
        //const name=event.target.name;

        const {name,value}=event.target;
        
        setNote((prevData)=>{
            return{
                ...prevData,
                [name]:value,
            };
        });

        console.log(note);
    };

        const addEvent=()=>{
                props.passNote(note);
                setNote({
                    title:'',
                    content:'',
                });
        }

        const expandIt=()=>{
            setExpand(true);
        }
        const btoNormal=()=>{
            setExpand(false);
        }

    return(
        <>
            <div className='main_note'  onDoubleClick={btoNormal}>
                <form>
                {expand? 
                    <input type='text' 
                    value={note.title} 
                    onChange={InputEvent} 
                    name='title'
                    autoComplete='off'
                    placeholder='title'/> : null}
                    <textarea rows="" 
                    column="" 
                    value={note.content} 
                    onChange={InputEvent} 
                    name='content'
                    onClick={expandIt}
                    placeholder='write a note...' > </textarea>
                 {expand?   
                    <Button onClick={addEvent} className='btn1'><AddIcon /></Button>
                    :null}
                </form>
            </div>
        </>
    )
}

export default CreateNote;