import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

// this is just temporary
const SearchBar = props => {
    const [search, setSearch] = useState("");

    const onSearchChange = (e) => setSearch(e.target.value);

    const onEnter = (e) => {
        if(e.keyCode === 13 && search !== "")  {
            let searchTerm = search.split(" ").join("+");
            window.open(`https://google.com/search?q=${searchTerm}`)
        }
    }

    return (
        <div>
            <TextField label='search' value={search}
                onChange={onSearchChange} onKeyDown={onEnter}/>
        </div>
    )
}

export default SearchBar;