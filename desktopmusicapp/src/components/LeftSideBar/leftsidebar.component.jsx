import React from 'react';
import { MDBIcon } from 'mdbreact';
import './leftside.styles.scss';


function LeftSideBar() {
    return (
        <div className="leftsidebar">
            <ul className="leftsidetoplist">
                <li> <MDBIcon icon="columns" /> Explore</li>
                <li> <MDBIcon icon="broadcast-tower" /> Stations</li>
                <li> <MDBIcon icon="envelope-open-text" /> Inbox</li>
                <li> <MDBIcon icon="microphone-alt" /> Artists</li>
                <li> <MDBIcon icon="record-vinyl" /> Albums</li>
                <li> <MDBIcon icon="cogs" /> Settings</li>
            </ul>
            <span className="sideheader">Your Playlist</span>
            <ul className="playlist">
                <li>Old Days</li>
                <li>Honeymoon</li>
                <li>Master Peaces</li>
            </ul>
            <span className="sideheader">Collections</span>
            <ul className="collections">
                <li>Animals</li>
                <li>Karbon</li>
                <li>Saxity</li>
            </ul>
            
        </div>
    )
}

export default LeftSideBar;
