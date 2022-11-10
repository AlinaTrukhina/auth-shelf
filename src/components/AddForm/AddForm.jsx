import { useState } from 'react';

function AddForm(){
    const [newItem, setNewItem] = useState('');
    const [newImage, setNewImage] = useState('');
    return(
        <>
            <h1>add form sheesh</h1>

            {/* <input onChange={} placeholder="add a thing" /> 

            <input onChange={} placeholder="image url here" /> */}
        </>
    )
}

export default AddForm;