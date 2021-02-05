import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react'

// do add category here
// render eacj categpry
const LinkCard = (props) => {
    const { 
        data, id, addLink, deleteCat,
        updateLink, deleteLink
    } = props;

    const [text, setText] = useState("");
    const [url, setUrl] = useState("");

    const [addDialog, setAddDialog] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const onChangeText = (e) => setText(e.target.value);
    const onChangeUrl = (e) => setUrl(e.target.value);
    const toggleDialog = () => setAddDialog(!addDialog);
    const toggleEdit = () => setEditMode(!editMode);


    // show edit mode
    // add link, delete category
    // edit links
    const renderEditMode = () => {  // currently add new link
        if (editMode)
            return <>
                <TextField onChange={onChangeText} value={text} placeholder="text" />
                <TextField onChange={onChangeUrl} value={url} placeholder="url" />
                <Button onClick={() => {
                    addLink(id, text, url);
                    setText(""); setUrl("");
                }} >Add New Link</Button>
            </>
    }

    // display delete category
    const renderEditButtons = () => {
        if (editMode)
            return <>
                <Button onClick={() => { toggleEdit(); deleteCat(id) }}> delete {data.cat} - {id} </Button>
            </>
    }

    return (
        <div>
            {/* add category */}
            {/* normal */}
            <h3>{data.cat}</h3>
            <Button onClick={toggleEdit} >Edit</Button>
            {renderEditButtons()}
            <br />

            <ul>
                {renderEditMode()}
                {data.links.map((e, i) => 
                    <RenderLink key={i} linkID={i} catID={id} link={e} editMode={editMode}
                        toggleEdit={toggleEdit}
                        deleteLink={deleteLink} updateLink={updateLink} />)}
            </ul>
        </div>
    )
}

// ________________________________________________________________________________

const RenderLink = props => {
    const { 
        editMode, link,
        catID, linkID, 
        deleteLink, updateLink,
        toggleEdit
    } = props;

    const [lText, setLText] = useState(link.text);
    const [lUrl, setLUrl] = useState(link.url);

    const update = () => {
        updateLink(catID, linkID, lText, lUrl);
        toggleEdit()
    }

    if (editMode)
        return <>
            <TextField onChange={(e) => setLText(e.target.value)} value={lText} placeholder="text" />
            <TextField onChange={(e) => setLUrl(e.target.value)} value={lUrl} placeholder="url" />
            <Button onClick={update} >edit</Button>
            <Button onClick={() => deleteLink(catID, linkID)} >delete</Button>
        </>

    else
        return <li><a href={`https://${lUrl}`}>{lText}</a></li>
}

export default LinkCard
