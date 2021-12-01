import React, { Component } from 'react';
import './Email_verification.css';

export default class Email_verification extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeOtp = this.onChangeOtp.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = { otp: '', }
    }

    // Form Events
    onChangeOtp(e) {
        this.setState({ otp: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault()

    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                otp: this.userData.otp,
            })
        } else {
            this.setState({
                otp: '',

            })
        };
    };

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    };


    render() {
        return (
            <div className="head">
            <div className="register">
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Otp</label>
                        <input type="number" value={this.state.otp} 
                        onChange={this.onChangeOtp} />
                    </div>

                    <button type="button" className="btn btn-primary btn-block">
                    <a href="Company_details" >Back </a></button>
                    <button type="submit" className="btn btn-primary btn-block">Verify</button>
                </form>
            </div>
        </div>
        );
    };
};