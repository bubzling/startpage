import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Button, FormControl, MenuItem, Select } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    form: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}));

// this is just temporary
const LinkCreate = props => {
    const classes = useStyles();

    const [category, setCategory] = useState(-1);
    const [linkName, setLinkName] = useState("");
    const [url, setUrl] = useState("");
    // const [validated, setValidated] = useState(0);

    const { addLink } = props;

    const onCatChange = (e) => {
        console.log(e.target.value);
        // console.log(i);
        // console.log(v);
        setCategory(e.target.value);
    }
    const onLinkChange = (e) => setLinkName(e.target.value);
    const onUrlChange = (e) => setUrl(e.target.value);


    return (
        <div>
            {/* <FormControl className={classes.form}>  
                <Select onChange={onCatChange} value={category}>
                    {
                        list.map((cat, index) =>
                            <MenuItem key={index} value={index}>{cat.groupName}</MenuItem>
                        )
                    }
                </Select>
            </FormControl> */}
            <FormControl className={classes.form}>  {/* link text box */}
                <TextField label='add link'
                    value={linkName}
                    onChange={onLinkChange} />
            </FormControl>
            <FormControl className={classes.form}>  {/* url box */}
                <TextField label='url'
                    value={url}
                    onChange={onUrlChange} />
            </FormControl>

            <Button variant='contained' onClick={() => addLink(category, linkName, url)}>Add Url</Button>
        </div>
    )
}


export default LinkCreate;