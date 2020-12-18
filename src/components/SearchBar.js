import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

const SearchBar = props => {
    return (
        <div>
            <TextField label='search'
                variant='outlined' />
        </div>
    )
}

export default SearchBar;