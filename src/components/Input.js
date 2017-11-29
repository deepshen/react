import React from 'react'

const Input = (props)=>{
    return (
        <form>
            <div
                className="form-group">
                <label
                    htmlFor="listInput">
                    Email address
                </label>
                <input onChange={props.onchange} value={props.value}
                    type="text"
                    className="form-control"
                    id="listItemInput"
                    placeholder="Add new todo"
                />
                <button onClick={props.onsubmit}
                    className="btn btn-primary">
                    Add Item
                </button>
            </div>
        </form>
    )
};

export default Input