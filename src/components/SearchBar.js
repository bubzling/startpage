import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <TextField label='search'
                    variant='outlined'/>
            </div>
        )
    }
}
