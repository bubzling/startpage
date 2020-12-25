import React, { useState, useEffect } from 'react'

import LinkCreate from '../LinkCreate/LinkCreate' 

/*
    component to list quick links
*/

const UrlList = props => {
    const { list } = props;

    // console.log(list)
    // const theThing = () => {
    //     for (let i in list)
    // }

    return (
        <div>
            <h3>This is the stuff</h3>
            {
                Object.keys(list).map(n  => (   // each category
                    <div>
                        <h5>{n}</h5>
                        {
                            list[n].map(m => {  // each link
                                console.log(m);
                                return <a href={m.url}><li>{m.text}</li></a>
                            })
                        }
                    </div>
                ))
            }

            {/* <List list={list} /> */}
        </div>
    )
}


export default UrlList;