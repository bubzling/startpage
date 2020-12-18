import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

/*
    component to list quick links
*/

const UrlList = props => {
    const [list, setList] = useState([
        {
            groupName: "School",
            links: [
                { text: 'Mail', url: 'email.itd.uts.edu.au/email/' },
                { text: 'BlackBoard', url: 'online.uts.edu.au/webapps/login/' },
                { text: 'Canvas', url: 'canvas.uts.edu.au/' },
                { text: 'Github', url: 'github.com/' },
            ]
        },
        {
            groupName: "Chill",
            links: [
                { text: 'youtube', url: 'www.youtube.com/' },
                { text: 'reddit', url: 'reddit.com/' },
                { text: 'twitch', url: 'www.twitch.tv/' },
                { text: 'primetv', url: 'primevideo.com/' },
            ]
        }
    ]);


    console.log(list)


    return (
        <div>
            <h3>This is the stuff</h3>
            <ShowLists list={list} />
        </div>
    )
}



//     componentDidMount() {
//         // let a = JSON.stringify(this.state.linkGroups);
//         // localStorage.setItem("_startpageData", a);
//         document.title = "Cheese";

//         let b = JSON.parse(localStorage.getItem("_startpageData"));
//         console.log(b);
//         this.setState({
//             linkGroups: [...b]
//         })
//     }



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