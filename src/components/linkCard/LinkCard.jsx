import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react'

// do add category here
const LinkCard = (props) => {
    const { data, id, addLink, deleteCat } = props;

    const [text, setText] = useState("");
    const [url, setUrl] = useState("");

    const [addDialog, setAddDialog] = useState(false);
    const [editMode, setEditMode] = useState(true);

    const onChangeText = (e) => setText(e.target.value);
    const onChangeUrl = (e) => setUrl(e.target.value);
    const toggleDialog = () => setAddDialog(!addDialog);
    const toggleEdit = () => setEditMode(!editMode);


    // console.log(data);
    const renderAddNew = () => {
        if (addDialog)
            return <>
                <TextField onChange={onChangeText} value={text} placeholder="text" />
                <TextField onChange={onChangeUrl} value={url} placeholder="url" />
                <Button onClick={() => addLink(id, text, url)} >Add New Link</Button>
            </>
    }

    return (
        <div>
            {/* add category */}
            <Button onClick={() => deleteCat(id)}> delete {data.cat} - {id} </Button> <br />
            <Button onClick={toggleDialog}> new link for {data.cat} - {id} </Button> <br />
            {renderAddNew()}
            {/* normal */}
            <h3>{data.cat}</h3>
            <ul>
                {data.links.map(e => <RenderLink link={e} editMode={editMode} />)}
            </ul>
        </div>
    )
}

const RenderLink = props => {
    const { editMode,link } = props;

    const [lText, setLText] = useState(link.text);
    const [lUrl, setLUrl] = useState(link.url);

    if (editMode)
        return <>
            <TextField onChange={(e) => setLText(e.target.value)} value={lText} placeholder="text" />
            <TextField onChange={(e) => setLUrl(e.target.value)} value={lUrl} placeholder="url" />
            <Button onClick={() => console.log("editing")} >edit</Button>
            <Button onClick={() => console.log("delete")} >delete</Button>
        </>

    else
        return <li>{lText} - {lUrl} </li>
}

export default LinkCard
