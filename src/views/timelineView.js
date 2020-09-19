import React from 'react';
import shortCut_facebookicon from '../assets/img/icons/facebook.svg'
import shortCut_homeicon from '../assets/img/icons/home.svg'
import shortCut_flagicon from '../assets/img/icons/flag.svg'
import shortCut_tvicon from '../assets/img/icons/tv.svg'
import shortCut_usersicon from '../assets/img/icons/users.svg'
import shortCut_calendaricon from '../assets/img/icons/calendar.svg'
import shortCut_plusicon from '../assets/img/icons/plus.svg'
import shortCut_messengericon from '../assets/img/icons/messenger.svg'
import shortCut_bellicon from '../assets/img/icons/bell.svg'
import shortCut_arrowicon from '../assets/img/icons/arrow.svg'

import avatar_1 from '../assets/img/avatar/1.jpg'
import avatar_2 from '../assets/img/avatar/2.jpg'
import avatar_3 from '../assets/img/avatar/3.jpg'
import avatar_4 from '../assets/img/avatar/4.jpg'
import avatar_5 from '../assets/img/avatar/5.jpg'
import avatar_6 from '../assets/img/avatar/6.jpg'

import avatar_hero from '../assets/img/avatar/hero.png'

import st_1 from '../assets/img/stories/st-1.jpeg'
import st_2 from '../assets/img/stories/st-2.jpeg'
import st_3 from '../assets/img/stories/st-3.jpeg'
import st_4 from '../assets/img/stories/st-4.jpg'
import page_3 from '../assets/img/stories/page-3.jpeg'
import page_2 from '../assets/img/stories/page-2.jpg'
import page_1 from '../assets/img/stories/page-1.jpg'

import shield_icon from '../assets/img/icons/shield.svg'
import colored_people from '../assets/img/icons/colored-people.svg'
import colored_messenger from '../assets/img/icons/colored-messenger.svg'
import colored_flag from '../assets/img/icons/colored-flag.svg'
import arrow_down from '../assets/img/icons/arrow-down.svg'
import arrow_right from '../assets/img/icons/arrow-right.svg'
import gift from '../assets/img/icons/gift.svg'
import camera from '../assets/img/icons/camera.svg'
import img_ from '../assets/img/icons/image.svg'
import smile_2 from '../assets/img/icons/smile-2.svg'
import share from '../assets/img/icons/share.svg'
import comment from '../assets/img/icons/comment.svg'
import thumbs_up from '../assets/img/icons/thumbs-up.svg'
import posts_1 from '../assets/img/posts/1.jpg'

import video_room from '../assets/img/icons/video-room.svg'
import smile from '../assets/img/icons/smile.svg'
import photos from '../assets/img/icons/photos.svg'
import video_live from '../assets/img/icons/video-live.svg'


export default class TimelineViewComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="body-timeline">
                <nav>
                    <div className="left-side">
                        <a href="/">
                            <div className="logo">
                                <img src={shortCut_facebookicon} alt="" />
                            </div>
                        </a>

                        <div className="search">
                            <input type="text" placeholder="Search Facebook" name="" id="" />
                        </div>
                    </div>


                    <div className="tabs">
                        <div className="tab-icon active">
                            <div className="icon">
                                <img src={shortCut_homeicon} alt="" />
                            </div>
                        </div>

                        <div className="tab-icon">
                            <div className="icon has-notification">
                                <img src={shortCut_flagicon} alt="" />
                            </div>
                        </div>

                        <div className="tab-icon">
                            <div className="icon">
                                <img src={shortCut_tvicon} alt="" />
                            </div>
                        </div>

                        <div className="tab-icon">
                            <div className="icon">
                                <img src={shortCut_usersicon} alt="" />
                            </div>
                        </div>


                        <div className="tab-icon">
                            <div className="icon has-notification">
                                <img src={shortCut_calendaricon} alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="right-side">
                        <a href="profile">
                            <div className="user">
                                <div className="profile">
                                    <img src={avatar_hero} alt="" />
                                </div>
                                <h4>Nalin</h4>
                            </div>
                        </a>

                        <div className="user-icons">
                            <div className="icon">
                                <img src={shortCut_plusicon} alt="" />
                            </div>

                            <a href="/messenger">
                                <div className="icon has-notification">
                                    <img src={shortCut_messengericon} alt="" />
                                </div>
                            </a>

                            <div className="icon">
                                <img src={shortCut_bellicon} alt="" />
                            </div>

                            <div className="icon">
                                <img src={shortCut_arrowicon} alt="" />
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="wrapper">
                    <div className="shortcuts">
                        <div className="first-col">
                            <div className="menu-item">

                                <a href="profile">
                                    <div className="user">
                                        <div className="profile">
                                            <img src={avatar_hero} alt="" />
                                        </div>
                                        <h4>Nalin</h4>
                                    </div>
                                </a>

                            </div>

                            <div className="menu-item">
                                <div className="item-row">
                                    <div className="icon">
                                        <img src={shield_icon} alt="" />
                                    </div>
                                    <h4>COVID-19 Infromation Center </h4>
                                </div>
                            </div>

                            <div className="menu-item">
                                <div className="item-row">
                                    <div className="icon">
                                        <img src={colored_people} alt="" />
                                    </div>
                                    <h4>Friends </h4>
                                </div>
                            </div>

                            <div className="menu-item">
                                <a href="/messenger">
                                    <div className="item-row">
                                        <div className="icon">
                                            <img src={colored_messenger} alt="" />
                                        </div>
                                        <h4>Messenger </h4>
                                    </div>
                                </a>
                            </div>

                            <div className="menu-item">
                                <div className="item-row">
                                    <div className="icon">
                                        <img src={colored_flag} alt="" />
                                    </div>
                                    <h4>Pages </h4>
                                </div>
                            </div>

                            <div className="menu-item">
                                <div className="item-row  border">
                                    <div className="icon more">
                                        <img src={arrow_down} alt="" />
                                    </div>
                                    <h4>see more </h4>
                                </div>
                            </div>
                        </div>
                        <div className="second-col">

                            <h6 className="title">
                                your shortcuts
                </h6>
                            <div className="menu-item">
                                <div className="item-row">
                                    <div className="icon"> st_1
                                        <img src={st_1} alt="" />
                                    </div>
                                    <h4>Designers house </h4>
                                </div>
                            </div>

                            <div className="menu-item">
                                <div className="item-row">
                                    <div className="icon">
                                        <img src={st_2} alt="" />
                                    </div>
                                    <h4>Script house </h4>
                                </div>
                                <div className="menu-item">
                                    <div className="item-row">
                                        <div className="icon">
                                            <img src={page_1} alt="" />
                                        </div>
                                        <h4>ui ux Designers workshop </h4>
                                    </div>
                                </div>

                                <div className="menu-item">
                                    <div className="item-row">
                                        <div className="icon">
                                            <img src={st_3} alt="" />
                                        </div>
                                        <h4>netflix movies recommends </h4>
                                    </div>
                                </div>

                                <div className="menu-item">
                                    <div className="item-row">
                                        <div className="icon">
                                            <img src={page_2} alt="" />
                                        </div>
                                        <h4>the futur </h4>
                                    </div>
                                </div>


                                <div className="menu-item">
                                    <div className="item-row">
                                        <div className="icon">
                                            <img src={page_3} alt="" />
                                        </div>
                                        <h4>aj smart </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="posts">

                        <div className="stories">
                            <div className="owl-controls">
                                <div className="owl-nav">
                                    <div className="controllers nxtBtn">
                                        <img src={arrow_right} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="owl-carousel owl-theme slider">
                                <div className="item">
                                    <div className="overlay first">
                                        <div className="create">
                                            <div className="icon">
                                                <img src={shortCut_plusicon} alt="" />
                                            </div>
                                            <span>Create a Story</span>
                                        </div>
                                    </div>
                                    <div className="story-image">
                                        <img src={avatar_hero} alt="" />
                                    </div>
                                </div>


                                <div className="item">
                                    <div className="overlay">
                                        <div className="person">
                                            <div className="profile">
                                                <img src={avatar_2} alt="" />
                                            </div>
                                        </div>
                                        <h4> samantha john</h4>
                                    </div>
                                    <div className="story-image">
                                        <img src={st_2} alt="" />
                                    </div>
                                </div>


                                <div className="item">
                                    <div className="overlay">
                                        <div className="person">
                                            <div className="profile">
                                                <img src={avatar_3} alt="" />
                                            </div>
                                        </div>
                                        <h4>Omar yassir</h4>
                                    </div>
                                    <div className="story-image">
                                        <img src={st_3} alt="" />
                                    </div>
                                </div>


                                <div className="item">
                                    <div className="overlay">
                                        <div className="person">
                                            <div className="profile">
                                                <img src={avatar_4} alt="" />
                                            </div>
                                        </div>
                                        <h4>amanda cerny</h4>
                                    </div>
                                    <div className="story-image">
                                        <img src={st_4} alt="" />
                                    </div>
                                </div>


                                <div className="item">
                                    <div className="overlay">
                                        <div className="person">
                                            <div className="profile">
                                                <img src={avatar_5} alt="" />
                                            </div>
                                        </div>
                                        <h4>stacy lopez </h4>
                                    </div>
                                    <div className="story-image">
                                        <img src={st_1} alt="" />
                                    </div>
                                </div>


                                <div className="item">
                                    <div className="overlay">
                                        <div className="person">
                                            <div className="profile">
                                                <img src={avatar_6} alt="" />
                                            </div>
                                        </div>
                                        <h4>joshua simon</h4>
                                    </div>
                                    <div className="story-image">
                                        <img src={st_1} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="timeline">
                            <div className="view create-post">
                                <div className="input">
                                    <div className="user">
                                        <div className="profile">
                                            <img src={avatar_hero} alt="" />
                                        </div>
                                    </div>
                                    <input type="text" placeholder="What on your mind, Nalin?" name="" id="" />
                                </div>
                                <div className="media">
                                    <div className="category">
                                        <div className="option">
                                            <div className="icon">
                                                <img src={video_live} alt="" />
                                            </div>
                                            <span>Live video</span>
                                        </div>

                                        <div className="option">
                                            <div className="icon">
                                                <img src={photos} alt="" />
                                            </div>
                                            <span>photo/video</span>
                                        </div>

                                        <div className="option">
                                            <div className="icon">
                                                <img src={smile} alt="" />
                                            </div>
                                            <span>feeling/activity</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="create-post view smaller-margin">
                                <div className="upper">
                                    <div className="title">
                                        <div className="icon">
                                            <img src={video_room} alt="" />
                                        </div>
                                        <span>Rooms</span>
                                    </div>
                                    <a href="">
                                        create
                        </a>
                                </div>

                                <div className="owl-carousel owl-theme rooms">
                                    <div className="item">
                                        <div className="user">
                                            <div className="profile">
                                                <img src={avatar_hero} alt="" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="item">
                                        <div className="user">
                                            <div className="profile">
                                                <img src={avatar_1} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="user">
                                            <div className="profile">
                                                <img src={avatar_3} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="user">
                                            <div className="profile">
                                                <img src={avatar_4} alt="" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="item">
                                        <div className="user">
                                            <div className="profile">
                                                <img src={avatar_2} alt="" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="item">
                                        <div className="user">
                                            <div className="profile">
                                                <img src={avatar_4} alt="" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="item">
                                        <div className="user">
                                            <div className="profile">
                                                <img src={avatar_5} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="view view-post-container smaller-margin">
                                <div className="view-post">
                                    <div className="upper">
                                        <div className="d-flex">
                                            <div className="user">
                                                <div className="profile">
                                                    <img src={avatar_5} alt="" />
                                                </div>
                                            </div>

                                            <div className="info">
                                                <h6 className="name">
                                                    diana barry
                                    </h6>
                                                <span className="time">1 hour ago</span>
                                            </div>
                                        </div>

                                        <div className="dots">
                                            <div className="dot"></div>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>Travellimg to the future 🌟 , it's alraedy 2020 🙋‍♂🌈🌴</p>
                                    </div>

                                    <div className="post-img">
                                        <img src={posts_1} alt="" />
                                    </div>

                                    <div className="actions-container">
                                        <div className="action">
                                            <div className="icon">
                                                <img src={thumbs_up} alt="" />
                                            </div>
                                            <span>
                                                like
                                </span>
                                        </div>

                                        <div className="action">
                                            <div className="icon">
                                                <img src={comment} alt="" />
                                            </div>
                                            <span>
                                                comment
                                </span>
                                        </div>

                                        <div className="action">
                                            <div className="icon">
                                                <img src={share} alt="" />
                                            </div>
                                            <span>
                                                share
                                </span>
                                        </div>
                                    </div>

                                    <div className="write-comment">
                                        <div className="user">
                                            <div className="profile">
                                                <img src={avatar_hero} alt="" />
                                            </div>
                                        </div>
                                        <div className="input">
                                            <input type="text" placeholder="Write a comment" name="" id="" />
                                            <div className="media">
                                                <div className="icon">
                                                    <img src={camera} alt="" />
                                                </div>

                                                <div className="icon">
                                                    <img src={img_} alt="" />
                                                </div>

                                                <div className="icon">
                                                    <img src={smile_2} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="view friends smaller-margin">
                                <div className="upper">
                                    <h6>people you may know</h6>
                                    <div className="dots">
                                        <div className="dot"></div>
                                    </div>
                                </div>

                                <div className="owl-carousel owl-theme people">
                                    <div className="item">
                                        <div className="person-img">
                                            <div className="icon">
                                                &times;
                                </div>
                                            <img src={avatar_1} alt="" />
                                        </div>

                                        <div className="info">
                                            <h4>
                                                rosie pie
                                </h4>
                                            <span>4 mutual friend</span>
                                            <button>
                                                add friend
                                </button>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="person-img">
                                            <div className="icon">
                                                &times;
                                </div>
                                            <img src={avatar_4} alt="" />
                                        </div>

                                        <div className="info">
                                            <h4>
                                                sarah jones
                                </h4>
                                            <span>4 mutual friend</span>
                                            <button>
                                                add friend
                                </button>
                                        </div>
                                    </div>


                                    <div className="item">
                                        <div className="person-img">
                                            <div className="icon">
                                                &times;
                                </div>
                                            <img src={avatar_3} alt="" />
                                        </div>

                                        <div className="info">
                                            <h4>
                                                chris doe
                                </h4>
                                            <span>4 mutual friend</span>
                                            <button>
                                                add friend
                                </button>
                                        </div>
                                    </div>


                                    <div className="item">
                                        <div className="person-img">
                                            <div className="icon">
                                                &times;
                                </div>
                                            <img src={avatar_2} alt="" />
                                        </div>

                                        <div className="info">
                                            <h4>
                                                katie adam
                                </h4>
                                            <span>4 mutual friend</span>
                                            <button>
                                                add friend
                                </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shortcuts shortcuts-2">
                        <div className="second-col first-col">
                            <div className="menu-item">
                                <div className="upper">
                                    <h6>Your pages</h6>
                                </div>
                            </div>

                            <div className="menu-item">
                                <div className="item-row">
                                    <div className="icon">
                                        <img src={st_2} alt="" />
                                    </div>
                                    <h4>Script house </h4>
                                </div>
                            </div>

                            <div className="menu-item">
                                <div className="item-row">
                                    <div className="icon">
                                        <img src={st_1} alt="" />
                                    </div>
                                    <h4>omar ui design </h4>
                                </div>
                            </div>

                            <div className="menu-item">
                                <div className="item-row  border">
                                    <div className="icon more">
                                        <img src={arrow_down} alt="" />
                                    </div>
                                    <h4>see more </h4>
                                </div>
                            </div>
                        </div>
                        <div className="second-col">

                            <h6 className="title">
                                birthdays
                </h6>
                            <div className="menu-item">
                                <div className="item-row">
                                    <div className="icon not-rounded">
                                        <img src={gift} alt="" />
                                    </div>
                                    <h4>it's diana berry's birthday </h4>
                                </div>
                            </div>
                            <div className="online">
                                <h6 className="title">
                                    contact
                    </h6>

                                <div className="user">
                                    <div className="profile">
                                        <img src={avatar_1} alt="" />
                                    </div>
                                    <h4>diana berry</h4>
                                </div>

                                <div className="user">
                                    <div className="profile">
                                        <img src={avatar_4} alt="" />
                                    </div>
                                    <h4>rosie pie</h4>
                                </div>

                                <div className="user">
                                    <div className="profile">
                                        <img src={avatar_2} alt="" />
                                    </div>
                                    <h4>samantha jones</h4>
                                </div>

                                <div className="user">
                                    <div className="profile">
                                        <img src={avatar_3} alt="" />
                                    </div>
                                    <h4>john doe</h4>
                                </div>

                                <div className="user">
                                    <div className="profile">
                                        <img src={avatar_4} alt="" />
                                    </div>
                                    <h4>stacy jr.</h4>
                                </div>

                                <div className="user">
                                    <div className="profile">
                                        <img src={avatar_5} alt="" />
                                    </div>
                                    <h4>christin sam</h4>
                                </div>

                                <div className="user">
                                    <div className="profile">
                                        <img src={avatar_6} alt="" />
                                    </div>
                                    <h4>kate simon</h4>
                                </div>

                                <div className="user">
                                    <div className="profile">
                                        <img src={avatar_1} alt="" />
                                    </div>
                                    <h4>diana berry</h4>
                                </div>

                                <div className="user">
                                    <div className="profile">
                                        <img src={avatar_2} alt="" />
                                    </div>
                                    <h4>sarah cerny</h4>
                                </div>

                                <div className="user">
                                    <div className="profile">
                                        <img src={avatar_3} alt="" />
                                    </div>
                                    <h4>josh doe</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
