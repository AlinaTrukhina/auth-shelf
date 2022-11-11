import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function AddForm(){
    const dispatch = useDispatch();

    const [newItem, setNewItem] = useState('');

    const handleChange = (evt) => {
        setNewItem(evt.target.value);
    }

    const handleSubmit = () => {
        dispatch({
            type: 'ADD_ITEM',
            payload: {data: newItem}
          });
    }

    return(
        <>
            <h1>add form sheesh</h1>
        <form onSubmit={handleSubmit}>
           <input value={newItem} 
           onChange={(evt)=>handleChange(evt)} 
           placeholder="add a thing" />
           <button>Add item</button>
        </form>
        </>
    )
}

export default AddForm;