import React, {useEffect, useState} from 'react';
import { Badge, Button, ButtonGroup, Container, Content, Divider, Dropdown, Footer, Icon, IconButton, List, Sidebar, Tooltip, Whisper } from 'rsuite';
import HeaderBar from '../../features/Header/HeaderBar';
import SideBar from '../../features/SideBar/SideBar';
import presenterImg from '../../img/presenter.jpg';
import meImg from '../../img/profile-img.jpg';
import mem2 from '../../img/mem2.jpg';
import mem3 from '../../img/mem3.jpg';
import './Meeting.css';
import { io } from 'socket.io-client';
const socket = io('http://localhost:4000/');


function Meeting(props) {
    console.log(props)
    const [myVideoPlayStatus, setMyVideoPlayStatus] = useState(true)
    const id = props.match.params.id;
   
    
    // const handleVideo = (stream) =>{
        
    // }
    
    const videoError = () =>{
        navigator.permissions.query({name: 'camera'}).then(function(result) {
            if (result.state === 'granted') {
            //   getUserVideo()
            }
            // else if (result.state == 'prompt') {
            //   showButtonToEnableLocalNews();
            // }
            // Don't do anything if the permission was denied.
           });
        console.log('video not allowed')
    }

    const getUserVideo = () =>{
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
        if(navigator.getUserMedia){
            navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            })
            .then((stream)=>{
                var video = document.querySelector("#video_cam");

                video.srcObject = stream;
                video.onloadedmetadata = function(e) {
                  video.play();
                };

                socket.on('user-connected', (id, stream)=>{
                    connectNewUser(id, stream)
                })
            })
            .catch(videoError)
        }
    }

    const connectNewUser = () =>{
        
    }

    // const pauseVideo = () =>{
    //     var video = document.querySelector("#video_cam");
    //     video.onloadedmetadata = function(e) {
    //       myVideoPlayStatus ? video.stop() : video.play();
    //     };
    //     setMyVideoPlayStatus(myVideoPlayStatus ? false : true)
    //     console.log({myVideoPlayStatus})
    // }
    
    useEffect(() => {
      getUserVideo()
    }, [id])
    // const addVideoStream = (video, stream) =>{
    //     video.srcObject = myVideoStream;
    //     video.addEventlistner('loadedmetadata', ()=>{
    //         video.play()
    //     })
    // }

    return (
        <Container className="meeting_container">
            {/* small sidenav component starts */}
            <SideBar />
            {/* videos container */}
            <Container>
                {/*header for search bar and profile pics  */}
                <HeaderBar />

                <Container>
                    <Container>

                        <Content className="cam_videos">
                            <div id="host_cam" className="host_cam cam">
                                {/* <img src={presenterImg} className="cam_frame" alt="presenter" /> */}

                                <video className="cam_frame" id="video_cam" muted="true"  autoPlay="true"></video>

                                <div className="cam_details">
                                    <Whisper trigger="hover" placement="top" speaker={<Tooltip>Anani Oluwatobiloba</Tooltip>}>
                                        <div className="caller_name">Anani Oluwatobiloba <Badge className="caller_status" style={{ background: '#4caf50' }} /></div>
                                    </Whisper>
                                    <div className={`mic_container mic_on`}><svg width="25px" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg></div>
                                </div>
                            </div>
                            {/* <div className="cam">
                                <img src={meImg} className="cam_frame" alt="member" />
                                <div className="cam_details">
                                    <Whisper trigger="hover" placement="top" speaker={<Tooltip>Mercy Johniana</Tooltip>}>
                                        <div className="caller_name">Mercy Johniana <Badge className="caller_status" style={{ background: '#4caf50' }} /></div>
                                    </Whisper>
                                    <div className="mic_container mic_off"><svg width="25px" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg></div>
                                </div>
                            </div>
                            <div className="cam">
                                <img src={mem2} className="cam_frame" alt="member" />
                                <div className="cam_details">
                                    <Whisper trigger="hover" placement="top" speaker={<Tooltip>Danny Drinkwater</Tooltip>}>
                                        <div className="caller_name">Danny Drinkwater <Badge className="caller_status" style={{ background: '#4caf50' }} /></div>
                                    </Whisper>
                                    <div className="mic_container mic_off"><svg width="25px" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg></div>
                                </div>
                            </div>

                            <div className="cam">
                                <img src={mem3} className="cam_frame" alt="member" />
                                <div className="cam_details">
                                    <Whisper trigger="hover" placement="top" speaker={<Tooltip>Executive CEO Jeff Danny Janes</Tooltip>}>
                                        <div className="caller_name">Executive CEO Jeff Danny Janes <Badge className="caller_status" style={{ background: '#4caf50' }} /></div>
                                    </Whisper>
                                    <div className="mic_container mic_on"><svg width="25px" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg></div>
                                </div>
                            </div> */}

                        </Content>

                        <Footer className="meeting_controls">
                            {/* Video & Meeting Controls */}
                            <ul>
                                <li>
                                    <ButtonGroup>
                                        <Button className="mic_control_btn">
                                            <svg width="21px" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                                        </Button>
                                        <Dropdown
                                            className="mic_control_dropdown"
                                            placement="topEnd"
                                            // trigger={['click', 'hover']}
                                            renderTitle={() => {
                                                return <IconButton icon={<Icon icon="angle-up" />} />;
                                            }}
                                        >
                                            <Dropdown.Item>Mute</Dropdown.Item>
                                        </Dropdown>
                                    </ButtonGroup>
                                </li>

                                <li>
                                    <ButtonGroup>
                                        <Button className="mic_control_btn">
                                            <svg width="21px" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                        </Button>
                                        <Dropdown
                                            className="mic_control_dropdown"
                                            placement="topEnd"
                                            // trigger={['click', 'hover']}
                                            renderTitle={() => {
                                                return <IconButton icon={<Icon icon="angle-up" />} />;
                                            }}
                                        >
                                            <Dropdown.Item>Stop Video</Dropdown.Item>
                                        </Dropdown>
                                    </ButtonGroup>
                                </li>

                                <li>
                                    <ButtonGroup>
                                        <Button className="mic_control_btn">
                                            <svg width="21px" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                            <span style={{ fontSize: '11px' }}>4</span>
                                        </Button>
                                        {/* <Dropdown
                                            className="mic_control_dropdown"
                                            placement="topEnd"
                                            // trigger={['click', 'hover']}
                                            renderTitle={() => {
          console.log("🚀 ~ file: Meeting.js ~ line 183 ~ pauseVideo ~ myVideoPlayStatus", myVideoPlayStatus)
                                                return <IconButton icon={<Icon icon="angle-up" />} />;
                                            }}
                                        >
                                            <Dropdown.Item>Stop Video</Dropdown.Item>
                                        </Dropdown> */}
                                    </ButtonGroup>
                                </li>

                                {/* end meeting btn */}
                                <li>
                                    <Button className="end_meeting_btn" color="red">End Meeting</Button>
                                </li>

                                <li>
                                    <ButtonGroup>
                                        <Button className="mic_control_btn">
                                            <svg width="21px" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </Button>
                                        <Dropdown
                                            className="mic_control_dropdown"
                                            placement="topEnd"
                                            // trigger={['click', 'hover']}
                                            renderTitle={() => {
                                                return <IconButton icon={<Icon icon="angle-up" />} />;
                                            }}
                                        >
                                            <Dropdown.Item>Go Full Screen</Dropdown.Item>
                                        </Dropdown>
                                    </ButtonGroup>
                                </li>

                                <li>
                                    <ButtonGroup>
                                        <Button className="mic_control_btn">
                                            <svg className="record_svg" enable-background="new 0 0 426.667 426.667" version="1.1" viewBox="0 0 426.67 426.67" space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m213.33 106.67c-58.88 0-106.67 47.787-106.67 106.67s47.787 106.67 106.67 106.67 106.67-47.787 106.67-106.67-47.787-106.67-106.67-106.67z" /><path d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333 S331.2,0,213.333,0z M213.333,384c-94.293,0-170.667-76.373-170.667-170.667S119.04,42.667,213.333,42.667 S384,119.04,384,213.333S307.627,384,213.333,384z" /></svg>
                                        </Button>
                                        <Dropdown
                                            className="mic_control_dropdown"
                                            placement="topEnd"
                                            // trigger={['click', 'hover']}
                                            renderTitle={() => {
                                                return <IconButton icon={<Icon icon="angle-up" />} />;
                                            }}
                                        >
                                            <Dropdown.Item className="dropdown_child">Record</Dropdown.Item>
                                        </Dropdown>
                                    </ButtonGroup>
                                </li>

                                <li>
                                    <IconButton className="chat_btn" icon={<svg width="21px" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>} size="lg" />
                                </li>
                            </ul>
                        </Footer>
                    </Container>


                    <Sidebar className="participant_and_chat_section_container">
                        <div className="participant_rows">
                            <div className="participant_title">participants(4)</div>
                            <Divider style={{ backgroundColor: '#8080808c', marginTop: '12px' }} />
                            <div className="participants">
                                <ul>
                                    <li>
                                        <div className="participant_name_container">
                                            <img src={presenterImg} width="40px" height="40px" className="participant_pics" alt="presenter" />
                                            <Whisper trigger="hover" placement="top" speaker={<Tooltip>Anani Oluwatobiloba</Tooltip>}>
                                                <div className="participant_name">Anani Oluwatobiloba</div>
                                            </Whisper>
                                        </div>
                                        <div className="participant_vid_mic_container">
                                            <span className="participant_mic">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                                            </span>
                                            <span className="participant_video">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                            </span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="participant_name_container">
                                            <img src={mem2} width="40px" height="40px" className="participant_pics" alt="presenter" />
                                            <Whisper trigger="hover" placement="top" speaker={<Tooltip>Danny Drinkwater</Tooltip>}>
                                                <div className="participant_name">Danny Drinkwater</div>
                                            </Whisper>
                                        </div>
                                        <div className="participant_vid_mic_container">
                                            <span className="participant_mic">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                                            </span>
                                            <span className="participant_video">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                            </span>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="chat_section">
                            <div className="chat_bar">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                                <span className="chat_bar_text">Chat</span>
                            </div>

                            <div className="chat_body">
                                <List className="chat_list_container" size="sm">
                                    <List.Item className="chat_list" key={1} index={1}>
                                        <div className="chat_name_container">
                                            <img src={presenterImg} width="30px" height="30px" className="participant_pics" alt="presenter" />

                                            <div className="chat_name_and_message_container">
                                                <div className="participant_name chat_participant_name">Anani Oluwatobiloba</div>
                                                <div className="chat">
                                                    This is my first message
                                                </div>
                                            </div>
                                        </div>
                                    </List.Item>
                                </List>
                            </div>

                            <div className="chat_input">
                                <input type="text" placeholder="type to write a message" />
                                <button>Send</button>
                            </div>
                        </div>
                    </Sidebar>
                </Container>
            </Container>
        </Container >
    )
}

export default Meeting
