import React from 'react'

const List = (props)=>{
    const list = props.listItems.map((el,i)=>
        <li key={i}><h2>{el}</h2><button className='btn btn-danger' onClick={()=>props.deleteItem(i)}>x</button></li>
    );
    return(
        <div>
            <ul>
                {
                    list
                }
            </ul>
        </div>
    )
};

export default List