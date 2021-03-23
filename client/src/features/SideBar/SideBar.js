import React from 'react';
import { Icon, IconButton, Sidebar, Tooltip, Whisper } from 'rsuite';
import './SideBar.css';

export default function SideBar() {
    return (
        <Sidebar className="sidebar_quick_nav">
            <div className="meeting_icon">
                <svg height="43" viewBox="0 0 32 32" width="43" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><clipPath id="a"><path d="m-200-175h1000v562h-1000z" /></clipPath><clipPath id="b"><circle cx="107" cy="106" r="102" /></clipPath><clipPath id="c"><circle cx="107" cy="106" r="100" /></clipPath><clipPath id="d"><circle cx="107" cy="106" r="92" /></clipPath><clipPath id="e"><path clipRule="evenodd" d="m135 94.06 26-19c2.27-1.85 4-1.42 4 2v57.94c0 3.84-2.16 3.4-4 2l-26-19zm-88-16.86v43.2a17.69 17.69 0 0 0 17.77 17.6h63a3.22 3.22 0 0 0 3.23-3.2v-43.2a17.69 17.69 0 0 0 -17.77-17.6h-63a3.22 3.22 0 0 0 -3.23 3.2z" /></clipPath><g clipPath="url(#a)" transform="translate(0 -178)"><path d="m232 61h366v90h-366z" fill="#4a8cff" /></g><g clipPath="url(#a)" transform="matrix(.156863 0 0 .156863 -.784314 -.627496)"><g clip-path="url(#b)"><path d="m0-1h214v214h-214z" fill="#e5e5e4" /></g><g clip-path="url(#c)"><path d="m2 1h210v210h-210z" fill="#fff" /></g><g clip-path="url(#d)"><path d="m10 9h194v194h-194z" fill="#4a8cff" /></g><g clip-path="url(#e)"><path d="m42 69h128v74h-128z" fill="#fff" /></g></g><g clip-path="url(#a)" transform="translate(0 -178)"><path d="m232 19.25h180v38.17h-180z" fill="#90908f" /></g></svg>
            </div>

            <div className="sidenav_icon_links">
                <Whisper trigger="hover" placement="topStart" speaker={<Tooltip>Home</Tooltip>}>
                    {/* <Icon  icon="home" /> */}
                    <svg className="sidenav_icon_svg w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </Whisper>
                <Whisper trigger="hover" placement="topStart" speaker={<Tooltip>Chat</Tooltip>}>
                    {/* <Icon className="" icon="stack-exchange" /> */}
                    <svg className="sidenav_icon_svg w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                </Whisper>
                <Whisper trigger="hover" placement="topStart" speaker={<Tooltip>Time</Tooltip>}>
                    <Icon className="sidenav_icon" icon="clock-o" />
                </Whisper>
                <Whisper trigger="hover" placement="topStart" speaker={<Tooltip>Contact</Tooltip>}>
                    <Icon className="sidenav_icon" icon="character-area" />
                </Whisper>
                {/* <Icon className="sidenav_icon" icon="lightbulb-o" /> */}
                <Whisper trigger="hover" placement="topStart" speaker={<Tooltip>Shedule a meeting</Tooltip>}>
                    <Icon className="sidenav_icon" icon="calendar" />
                </Whisper>
            </div>

            <div className="settings_icon">
                <Whisper trigger="hover" placement="topStart" speaker={<Tooltip>Settings</Tooltip>}>
                    <IconButton style={{ border: '1px solid #ffffff29', backgroundColor: '#5d5d5f61', color: 'gray' }} size="md" icon={<Icon icon="cog" />} />
                </Whisper>
            </div>
        </Sidebar>
    )
}
