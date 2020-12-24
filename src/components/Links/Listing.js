import React, { useState, useEffect } from 'react'

import LinkCreate from '../LinkCreate/LinkCreate' 

/*
    component to list quick links
*/

const UrlList = props => {
    const { list } = props;

    return (
        <div>
            <h3>This is the stuff</h3>
            <List list={list} />
        </div>
    )
}

// render each category
const List = (props) => {
    const [list, setList] = useState(props.list);

    const addLink = () => {
        alert("Hey")
    }

    if (!list) return <> </>
    return list.map((g, i) => (
        <ul key={i}>
            <hr />
            <LinkCreate addLink={addLink} />
            <hr />
            <label>{g.groupName}</label>

            <Links links={g.links} />
        </ul>
    ))
}

// render the list of links in each category
const Links = ({ links }) => {
    return links.map((l, i) => (
        <li key={i}>
            <a href={`https://${l.url}`}> {l.text} </a>
        </li>
    ))
}

export default UrlList;