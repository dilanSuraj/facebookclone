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

import shortCut_heroavatar from '../assets/img/avatar/hero.png'

import userlistimg_1 from '../assets/img/userlist/userlist-1.jpg'
import userlistimg_2 from '../assets/img/userlist/userlist-2.jpg'
import userlistimg_3 from '../assets/img/userlist/userlist-3.jpg'
import userlistimg_4 from '../assets/img/userlist/userlist-4.jpg'
import userlistimg_5 from '../assets/img/userlist/userlist-5.jpg'
import userlistimg_6 from '../assets/img/userlist/userlist-6.jpg'
import userlistimg_7 from '../assets/img/userlist/userlist-7.jpg'

import avatarImg_1 from '../assets/img/avatar/1.jpg'
import avatarImg_2 from '../assets/img/avatar/2.jpg'
import avatarImg_3 from '../assets/img/avatar/3.jpg'
import avatarImg_4 from '../assets/img/avatar/4.jpg'

export default class ProfileComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (


            <div class="theme-layout">
                <nav>
                    <div class="left-side">
                        <a href="/home">
                            <div class="logo">
                                <img src={shortCut_facebookicon} alt="" />
                            </div>
                        </a>

                        <div class="search">
                            <input type="text" placeholder="Search Facebook" name="" id="" />
                        </div>
                    </div>


                    <div class="tabs">
                        <div class="tab-icon active">
                            <div class="icon">
                                <img src={shortCut_homeicon} alt="" />
                            </div>
                        </div>

                        <div class="tab-icon">
                            <div class="icon has-notification">
                                <img src={shortCut_flagicon} alt="" />
                            </div>
                        </div>

                        <div class="tab-icon">
                            <div class="icon">
                                <img src={shortCut_tvicon} alt="" />
                            </div>
                        </div>

                        <div class="tab-icon">
                            <div class="icon">
                                <img src={shortCut_usersicon} alt="" />
                            </div>
                        </div>


                        <div class="tab-icon">
                            <div class="icon has-notification">
                                <img src={shortCut_calendaricon} alt="" />
                            </div>
                        </div>
                    </div>


                    <div class="right-side">
                        <div class="user">
                            <div class="profile">
                                <img src={shortCut_heroavatar} alt="" />
                            </div>
                            <h4>Nalin</h4>
                        </div>


                        <div class="user-icons">
                            <div class="icon">
                                <img src={shortCut_plusicon} alt="" />
                            </div>

                            <a href="/messenger">
                                <div class="icon has-notification">
                                    <img src={shortCut_messengericon} alt="" />
                                </div>
                            </a>

                            <div class="icon">
                                <img src={shortCut_bellicon} alt="" />
                            </div>

                            <div class="icon">
                                <img src={shortCut_arrowicon} alt="" />
                            </div>
                        </div>
                    </div>
                </nav>
                <section>
                    <div class="feature-photo">
                        <figure class="bgCover"></figure>
                        <div class="add-btn">
                            <span>1205 followers</span>
                            <a href="#" title="" data-ripple="">Add Friend</a>
                        </div>
                        <form class="edit-phto">
                            <i class="fa fa-camera-retro"></i>
                            <label class="fileContainer">
                                Edit Cover Photo
						<input type="file" />
                            </label>
                        </form>
                        <div class="container-fluid">
                            <div class="row merged">
                                <div class="col-lg-2 col-sm-3">
                                    <div class="user-avatar">
                                        <figure>
                                            <img src={shortCut_heroavatar} alt="" />
                                            <form class="edit-phto">
                                                <i class="fa fa-camera-retro"></i>
                                                <label class="fileContainer">
                                                    Edit Display Photo
											<input type="file" />
                                                </label>
                                            </form>
                                        </figure>
                                    </div>
                                </div>
                                <div class="col-lg-10 col-sm-9">
                                    <div class="timeline-info">
                                        <ul>
                                            <li class="admin-name">
                                                <h5>Nalin kandambi</h5>
                                                <span>Group Admin</span>
                                            </li>
                                            <li>
                                                <a class="" href="/home" title="" data-ripple="">time line</a>
                                                <a class="" href="#" title="" data-ripple="">Photos</a>
                                                <a class="" href="#" title="" data-ripple="">Videos</a>
                                                <a class="" href="#" title="" data-ripple="">Friends</a>
                                                <a class="" href="#" title="" data-ripple="">Groups</a>
                                                <a class="active" href="#" title="" data-ripple="">about</a>
                                                <a class="" href="#" title="" data-ripple="">more</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="gap gray-bg">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="row" id="page-contents">
                                        <div class="col-lg-3">

                                            <aside class="sidebar static">
                                                <div class="widget">
                                                    <h4 class="widget-title">Edit info</h4>
                                                    <ul class="naves">
                                                        <li>
                                                            <i class="ti-info-alt"></i>
                                                            <a title="" href="#">Basic info</a>
                                                        </li>
                                                        <li>
                                                            <i class="ti-mouse-alt"></i>
                                                            <a title="" href="#">Education &amp;
														Work</a>
                                                        </li>
                                                        <li>
                                                            <i class="ti-heart"></i>
                                                            <a title="" href="#">My interests</a>
                                                        </li>
                                                        <li>
                                                            <i class="ti-settings"></i>
                                                            <a title="" href="#">account setting</a>
                                                        </li>
                                                        <li>
                                                            <i class="ti-lock"></i>
                                                            <a title="" href="#">change password</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </aside>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="central-meta">
                                                <div class="about">
                                                    <div class="personal">
                                                        <h5 class="f-title"><i class="ti-info-alt"></i> Personal Info</h5>
                                                        <p>
                                                            I am an energetic, ambitious person who has developed a mature and responsible approach to any task that I undertake,
                                                            or situation that I am presented with. I am excellent in working with others to achieve a certain objective on time and with excellence.
                                                            In my previous role, I improved the performance, operations and productivity of my team by 35%.
												</p>
                                                    </div>
                                                    <div class="d-flex flex-row mt-2">
                                                        <ul class="nav nav-tabs nav-tabs--vertical nav-tabs--left">
                                                            <li class="nav-item">
                                                                <a href="#basic" class="nav-link active" data-toggle="tab">Basic
															info</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a href="#location" class="nav-link"
                                                                    data-toggle="tab">location</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a href="#work" class="nav-link" data-toggle="tab">work and
															education</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a href="#interest" class="nav-link"
                                                                    data-toggle="tab">interests</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a href="#lang" class="nav-link" data-toggle="tab">languages</a>
                                                            </li>
                                                        </ul>
                                                        <div class="tab-content">
                                                            <div class="tab-pane fade show active" id="basic">
                                                                <ul class="basics">
                                                                    <li><i class="ti-user"></i>Nalin kandambi</li>
                                                                    <li><i class="ti-map-alt"></i>Lives in Burwood East, Victoria, Australia</li>
                                                                    <li><i class="ti-mobile"></i>+1-234-345675</li>
                                                                    <li><i class="ti-email"></i><a href="#" class="__cf_email__"
                                                                        data-cfemail="3c4553494e515d55507c59515d5550125f5351">[email&#160;protected]</a>
                                                                    </li>
                                                                    <li><i class="ti-world"></i>www.nalinkandambi.com</li>
                                                                </ul>
                                                            </div>
                                                            <div class="tab-pane fade" id="location" role="tabpanel">
                                                                <div class="location-map">
                                                                    <div id="map-canvas"></div>
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane fade" id="work" role="tabpanel">
                                                                <div>

                                                                    <a href="#" title="">Envato</a>
                                                                    <p>Works at ABC Company</p>
                                                                    <ul class="education">
                                                                        <li><i class="ti-facebook"></i> BSCS from Faculty of Computing Student Community</li>
                                                                        <li><i class="ti-twitter"></i> MSCS Reading</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane fade" id="interest" role="tabpanel">
                                                                <ul class="basics">
                                                                    <li>Footbal</li>
                                                                    <li>internet</li>
                                                                    <li>photography</li>
                                                                </ul>
                                                            </div>
                                                            <div class="tab-pane fade" id="lang" role="tabpanel">
                                                                <ul class="basics">
                                                                    <li>English</li>
                                                                    <li>French</li>
                                                                    <li>Spanish</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3">
                                            <aside class="sidebar static">
                                                <div class="widget">
                                                    <h4 class="widget-title">Your page</h4>
                                                    <div class="your-page">

                                                        <div class="page-meta">
                                                            <a class="underline" title="" href="#">My page</a>
                                                            <span><i class="ti-comment"></i>Messages <em>9</em></span>
                                                            <span><i class="ti-bell"></i>Notifications <em>2</em></span>
                                                        </div>
                                                        <div class="page-likes">
                                                            <ul class="nav nav-tabs likes-btn">
                                                                <li class="nav-item"><a data-toggle="tab" href="#link1"
                                                                    class="active">likes</a></li>
                                                                <li class="nav-item"><a data-toggle="tab" href="#link2"
                                                                    class="">views</a></li>
                                                            </ul>

                                                            <div class="tab-content">
                                                                <div id="link1" class="tab-pane active fade show">
                                                                    <span><i class="ti-heart"></i>884</span>
                                                                    <a title="weekly-likes" href="#">35 new likes this
																week</a>
                                                                    <div class="users-thumb-list">
                                                                        <a data-toggle="tooltip" title="" href="#"
                                                                            data-original-title="Anderw" >
                                                                            <img alt="" src={userlistimg_1} />
                                                                        </a>
                                                                        <a data-toggle="tooltip" title="" href="#"
                                                                            data-original-title="frank">
                                                                            <img alt="" src={userlistimg_2} />
                                                                        </a>
                                                                        <a data-toggle="tooltip" title="" href="#"
                                                                            data-original-title="Sara">
                                                                            <img alt="" src={userlistimg_3} />
                                                                        </a>
                                                                        <a data-toggle="tooltip" title="" href="#"
                                                                            data-original-title="Amy">
                                                                            <img alt="" src={userlistimg_4} />
                                                                        </a>
                                                                        <a data-toggle="tooltip" title="" href="#"
                                                                            data-original-title="Ema">
                                                                            <img alt="" src={userlistimg_5} />
                                                                        </a>
                                                                        <a data-toggle="tooltip" title="" href="#"
                                                                            data-original-title="Sophie">
                                                                            <img alt="" src={userlistimg_6} />
                                                                        </a>
                                                                        <a data-toggle="tooltip" title="" href="#"
                                                                            data-original-title="Maria">
                                                                            <img alt="" src={userlistimg_7} />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div id="link2" class="tab-pane fade">
                                                                    <span><i class="ti-eye"></i>445</span>
                                                                    <a title="weekly-likes" href="#">440 new views this
																week</a>
                                                                    <div class="users-thumb-list">
                                                                        <a data-toggle="tooltip" title="" href="#"
                                                                            data-original-title="Anderw" >
                                                                            <img alt="" src={userlistimg_1} />
                                                                        </a>
                                                                        <a data-toggle="tooltip" title="" href="#"
                                                                            data-original-title="frank">
                                                                            <img alt="" src={userlistimg_2} />
                                                                        </a>
                                                                        <a data-toggle="tooltip" title="" href="#"
                                                                            data-original-title="Sara">
                                                                            <img alt="" src={userlistimg_3} />
                                                                        </a>
                                                                        <a data-toggle="tooltip" title="" href="#"
                                                                            data-original-title="Amy">
                                                                            <img alt="" src={userlistimg_4} />
                                                                        </a>
                                                                        <a data-toggle="tooltip" title="" href="#"
                                                                            data-original-title="Ema">
                                                                            <img alt="" src={userlistimg_5} />
                                                                        </a>
                                                                        <a data-toggle="tooltip" title="" href="#"
                                                                            data-original-title="Sophie">
                                                                            <img alt="" src={userlistimg_6} />
                                                                        </a>
                                                                        <a data-toggle="tooltip" title="" href="#"
                                                                            data-original-title="Maria">
                                                                            <img alt="" src={userlistimg_7} />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="widget stick-widget">
                                                    <h4 class="widget-title">Who's follownig</h4>
                                                    <ul class="followers">

                                                        <li>
                                                            <figure ><img src={avatarImg_1} alt="" />
                                                            </figure>
                                                            <div class="friend-meta">
                                                                <h4><a href="#" title="">Issabel</a></h4>
                                                                <a href="#" title="" class="underline">Add Friend</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img src={avatarImg_2} alt="" />
                                                            </figure>
                                                            <div class="friend-meta">
                                                                <h4><a href="#" title="">Anna</a></h4>
                                                                <a href="#" title="" class="underline">Add Friend</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img src={avatarImg_3} alt="" />
                                                            </figure>
                                                            <div class="friend-meta">
                                                                <h4><a href="#" title="">Andrew</a></h4>
                                                                <a href="#" title="" class="underline">Add Friend</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img src={avatarImg_4} alt="" />
                                                            </figure>
                                                            <div class="friend-meta">
                                                                <h4><a href="#" title="">Sophia</a></h4>
                                                                <a href="#" title="" class="underline">Add Friend</a>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}
