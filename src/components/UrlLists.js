import React, { Component } from 'react'
import { Button } from '@material-ui/core'



/*
    component to list quick links
*/

export default class UrlLists extends Component {
    constructor(props) {
        super(props);

        this.handleKeyDown = this.handleKeyDown.bind(this);

        this.state = {
            linkGroups: [
                {
                    groupTitle: "School",
                    links: [
                        { text: 'Mail', url: 'email.itd.uts.edu.au/email/' },
                        { text: 'BlackBoard', url: 'online.uts.edu.au/webapps/login/' },    
                        { text: 'Canvas', url: 'canvas.uts.edu.au/' },
                        { text: 'Github', url: 'github.com/' },
                    ] 
                },
                {
                    groupTitle: "Chill",
                    links: [
                        { text: 'youtube', url: 'www.youtube.com/' },
                        { text: 'reddit', url: 'reddit.com/' },    
                        { text: 'twitch', url: 'www.twitch.tv/' },
                        { text: 'primetv', url: 'primevideo.com//' },
                    ] 
                }
            ]
        }
    }

    componentDidMount() {
        console.log(this.state.links);
    }

    handleKeyDown(e) {
        console.log(e.keyCode);
    }

    renderGroup() {
        return this.state.linkGroups.map(group => {
            return <ul>
                {group.groupTitle}
                {this.renderLinks(group)}
            </ul>
        })
    }

    renderLinks(group) {
        return group.links.map(link => {
            return (
                <li>
                    <a href={'https://'+ link.url}>{link.text}</a> 
                </li>
            )
        })
    }

    render() {
        return (
            <div onKeyDown={this.handleKeyDown(this)}>
               QuickLinks
               <p>
                   {this.renderGroup()}
               </p>
            </div>
        )
    }
}
