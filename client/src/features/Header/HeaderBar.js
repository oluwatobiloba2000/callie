import React from 'react';
import {Header, Icon} from 'rsuite';
import profileImg from '../../img/profile-img.jpg';
import './HeaderBar.css';

export default function HeaderBar() {
    return (
        <Header className="meeting_header">
            <div className="logo_text_container">
                <span className="logo_text">Callie</span>
                <span> meeting</span>
            </div>

            <div className="side_profile_search">
                <div className="search_input_container">
                    <input type="text" className="search_input" placeholder="search by keyword" />
                    <Icon className="search_input_icon" icon="search" />
                </div>

                {/* profile image */}
                <div className="profile_img_container">
                    <img className="profile_img" src={profileImg} alt="profile" />
                </div>
            </div>
        </Header>
    )
}
