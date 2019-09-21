import React, {useState, useEffect} from 'react'

const NoteApp = () => {

    let notesData = JSON.parse(localStorage.getItem('notes'))
    let [detail, setDetail] = useState('')
    let [title, setTitle] = useState('')
    let [notes, setNotes] = useState(notesData||[])
    
   
    let handleChange = (e)=>{
        setTitle(e.target.value)
    }
    
  let handleDetChange = (e) => {
        setDetail(e.target.value)
    }
    let handleClick = () => {
        setNotes([
            ...notes,
            {
                title,
                detail
            }
        ])

        console.log(...notes)
    }


    useEffect(()=>{
        localStorage.setItem('notes', JSON.stringify(notes))
    })

    
    
    return(
        <div>
            <h1> My Notes </h1>
            {

            notes.map((note) =>{
                return(
                    <div key = {note.title}>
                    <h3>{note.title}</h3>
                    <p>{note.detail}</p>
                    </div>
                )
                
            })
            }
            
           <p>Title</p>
            <input  onChange={handleChange}></input>
            <p>Body</p>
            <textarea col="30" row="10" onChange={handleDetChange}></textarea>
            <br />
            <button onClick={handleClick}>Add Note</button>
        </div>
    )
    
    

    
    }
export default NoteApp
