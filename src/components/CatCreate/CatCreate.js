import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';


// this is just temporary
const CatCreate = props => {
    const [ category, setCategory ] = useState("");
    const [ validated, setValidated ] = useState(0);

    const { addCat, open } = props;

    const onCatChange = (e) => {
        setCategory(e.target.value);
    }

    if(!open) return <> </>;
    
    return (
        <div>
            <TextField label='add category'
                value={category}
                onChange={onCatChange} />
            <Button variant='contained' onClick={() => addCat(category)}>Add Category</Button>
        </div>
    )
}

export default CatCreate;