import React from 'react';
import indexBgImg from '../assets/img/indexBgImg.png'
import axios from 'axios';
import constants from '../utils/constants';
import notificationAlert from '../utils/notificationAlert';
import auth from '../utils/auth';

export default class LoginSignupViewComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            l_username: "",
            l_pw: "",
            surname: "",
            user_name: "",
            first_name: "",
            hashed_password: "",
            gender: "",
            birth_date: ""
        }
    }

    login = async (e) => {
        e.preventDefault();
        let user_name = this.state.l_username;
        let pw = this.state.l_pw;

        await axios.get(`${constants.API_URL}${constants.USER_API}${user_name}/${pw}`,
            {
                headers: constants.API_HEADER_INFO
            }).then(async (res) => {
                let resArr = []
                resArr = res.data;
                if (resArr.length == 1) {
                    notificationAlert.successAlert("Logged successfully")
                    auth.login(resArr[0]._id)
                    this.props.history.push("/home");
                    
                }
                else{
                    notificationAlert.customErrorAlert("Credentials are not found")
                }

            }).catch(error => {
                console.log(error)
                notificationAlert.customErrorAlert("Error occurred")

            });
    }

    register = async (e) => {
        e.preventDefault();
        const newUserObj = {
            surname: this.state.surname,
            user_name: this.state.user_name,
            first_name: this.state.first_name,
            hashed_password: this.state.hashed_password,
            gender: this.state.gender,
            birth_date: this.state.birth_date
        }
        await axios.post(`${constants.API_URL}${constants.USER_API}`,
            newUserObj,
            {
                headers: constants.API_HEADER_INFO
            }).then(async (res) => {
                notificationAlert.successAlert("Signed up successfully")
                this.props.history.push("/home");
                auth.login(res.data._id)
            }).catch(error => {
                console.log(error)
                notificationAlert.customErrorAlert("Error occurred")

            });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleChecked = (e) => {
        this.setState({
            gender: e.target.value
        })
        console.log(e.target.value)
    }
    render() {
        return (
            <>
                <section id="home-top" className="pt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div id="logo">
                                    <a href="">
                                        <i className="large material-icons pink-text"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <form className="d-flex" method="post">
                                    <div>
                                        <label>Email or phone</label>
                                        <input required type="text" className="form-control mb-2 mr-sm-4" id="l_username" onChange={this.handleChange} value={this.state.l_username} />
                                    </div>
                                    <div className="ml-3">
                                        <label>Password</label>
                                        <input required type="password" className="form-control mb-2 mr-sm-2" id="l_pw" onChange={this.handleChange} value={this.state.l_pw} />
                                    </div>

                                    <button type="submit" className="btn btn-primary mb-2 ml-3" style={{ marginTop: "2rem" }} onClick={(e) => this.login(e)}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="home-middle" className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="no-user" style={{ textAlign: "center" }}>
                                    <h1 style={{ color: "#0069d9", fontWeight: "bolder", fontSize: "5rem" }}>
                                        Facebook
            </h1>
                                    <p>
                                        Facebook helps you connect and share with the people in your
                                        life.
            </p>
                                    <img src={indexBgImg} className="responsive-img" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="registration">
                                    <h2>Create a new account</h2>
                                    <p>It's quick and easy.</p>
                                </div>
                                <div className="registration-form">
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <input type="text" className="form-control" id="first_name" placeholder="First name" onChange={this.handleChange} value={this.state.first_name} />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <input type="text" className="form-control" id="surname" placeholder="Surname" onChange={this.handleChange} value={this.state.surname} />
                                        </div>

                                        <div className="col-md-12 mb-3">
                                            <input type="text" className="form-control" id="user_name"
                                                placeholder="Mobile number or email address" onChange={this.handleChange} value={this.state.user_name} />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <input type="password" className="form-control" id="hashed_password" placeholder="New password" onChange={this.handleChange} value={this.state.hashed_password} />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <div className="input-group datepicker" data-provide="datepicker">
                                                <input type="date" className="form-control datepicker" id="birth_date" onChange={this.handleChange} value={this.state.birth_date} />
                                                <div className="input-group-addon">
                                                    <span className="glyphicon glyphicon-th"></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12 mb-3">
                                            <div className="row">
                                                <div className="col s4" onChange={this.handleChecked}>
                                                    <p>
                                                        <label>
                                                            <input className="with-gap" name="gender" type="radio"
                                                                value="FEMALE"
                                                                checked={this.state.gender === "FEMALE"}
                                                                onChange={this.handleChecked}
                                                                id="FEMALE" />
                                                            <span>Female</span>
                                                        </label>
                                                    </p>
                                                </div>
                                                <div className="col s4">
                                                    <p>
                                                        <label>
                                                            <input className="with-gap" name="gender" type="radio"
                                                                value="MALE"
                                                                checked={this.state.gender === "MALE"}
                                                                onChange={this.handleChecked}
                                                                id="MALE" />
                                                            <span>Male</span>
                                                        </label>
                                                    </p>
                                                </div>
                                                <div className="col s4">
                                                    <p>
                                                        <label>
                                                            <input className="with-gap" name="gender" type="radio"
                                                                value="OTHERS"
                                                                checked={this.state.gender === "OTHERS"}
                                                                onChange={this.handleChecked}
                                                                id="OTHERS" />
                                                            <span>Others</span>
                                                        </label>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col s12">
                                            <p>
                                                By clicking Sign Up, you agree to our Terms,
                    <a href="#">Data Policy</a> and
                    <a href="#">Cookie Policy</a> . You may receive SMS
                    notifications from us and can opt out at any time.
                  </p>
                                        </div>
                                    </div>

                                    <button className="btn btn-primary btn-lg" type="submit" onClick={this.register}>
                                        Submit
              </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

}
