import React from 'react';
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdbreact';
import './leftside.styles.scss';


function LeftSideBar() {
    return (
        <div className="leftsidebar">
            <ul className="leftsidetoplist">
                <li> <MDBIcon icon="columns" /> <Link  to="/">Explore</Link></li>
                <li> <MDBIcon icon="broadcast-tower" />  Stations</li>
                <li> <MDBIcon icon="envelope-open-text" />  Inbox</li>
                <li> <MDBIcon icon="microphone-alt" />  Artists</li>
                <li> <MDBIcon icon="record-vinyl" />  Albums</li>
                <li> <MDBIcon icon="cogs" />  Settings</li>
            </ul>
            <span className="sideheader">Your Playlist</span>
            <ul className="playlist">
                <li>Old Days</li>
                <li>Honeymoon</li>
                <li>Master Peaces</li>
            </ul>
            <span className="sideheader">Collections</span>
            <ul className="collections">
                <li> <img src="http://daily-beat.com/wp-content/uploads/2013/10/martin-garrix-animals-official-video.jpg" alt="" className="rounded-circle" width="35px" height="35px"/> Animals</li>
                <li> <img src="https://c.saavncdn.com/277/Karbon-English-2014-20160418074345-500x500.jpg" alt="" className="rounded-circle" width="35px" height="35px"/> Karbon</li>
                <li> <img src="https://i1.sndcdn.com/artworks-000208719863-dxvy2g-t500x500.jpg" alt="" className="rounded-circle" width="35px" height="35px"/> Saxity</li>
            </ul>
            
        </div>
    )
}

export default LeftSideBar;
