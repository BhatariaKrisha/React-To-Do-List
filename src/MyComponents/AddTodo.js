import React, { useState } from 'react'

export const AddTodo = (props) => {
    const[title,setTitle] = useState("");
    const[desc,setDesc] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or description can not be blank");
        }
        else
        {
             props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
       
    }
    return (
        <div className='container my-3'>
            <h1 className='text-center'>Add a TODO</h1>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                        
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-primary">Add Task</button>
            </form>
        </div>
    )
}
