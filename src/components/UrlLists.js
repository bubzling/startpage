import React, { useState, useEffect } from 'react'

/*
    component to list quick links
*/

const UrlList = ({list}) => {

    return (
        <div>
            <h3>This is the stuff</h3>
            <ShowLists list={list} />
        </div>
    )
}

// render each category
const ShowLists = ({list}) => {
    if (!list) return <> </>
    return list.map((g, i) => (
        <>
            <p>{g.groupName}</p>
            <ul key={i}>
                <ShowLinks links={g.links} />
            </ul>
        </>
    ))
}

// render the list of links in each category
const ShowLinks = ({links}) => {
    return links.map((l, i) => (
        <li key={i}>
            <a href={`https://${l.url}`}> {l.text} </a>
        </li>
    ))
}

export default UrlList;