import React, { Component } from 'react';
import './Company_details.css';

export default class Company_details extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeFile = this.onChangeFile.bind(this);
        this.onChangeCompany_name = this.onChangeCompany_name.bind(this);
        this.onChangeEmail_id = this.onChangeEmail_id.bind(this);
        this.onChangeJob_title = this.onChangeJob_title.bind(this);
        this.onChangeExperience = this.onChangeExperience.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            file: '',
            company_name: '',
            email_id: '',
            job_title: '',
            experience: ''
        }
    }

    // Form Events
    onChangeFile(e) {
        this.setState({ file: e.target.value })
    }

    onChangeCompany_name(e) {
        this.setState({ company_name: e.target.value })
    }

    onChangeEmail_id(e) {
        this.setState({ email_id: e.target.value })
    }

    onChangeJob_title(e) {
        this.setState({ job_title: e.target.value })
    }

    onChangeExperience(e) {
        this.setState({ experience: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                file: this.userData.file,
                company_name: this.userData.company_name,
                email_id: this.userData.email_id,
                job_title: this.userData.job_title,
                experience: this.userData.experience
            })
        } else {
            this.setState({
                file: '',
                email_id: '',
                company_name: '',
                job_title: '',
                experience: '',
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
                        <label>File</label>
                        <input type="File" value={this.state.file}
                         onChange={this.onChangeFile} />
                    </div>
                    <div>
                        <label>Email_id</label>
                        <input type="email" value={this.state.email_id}
                         onChange={this.onChangeEmail_id} />
                    </div>
                    <div>
                        <label>Company_name</label>
                        <input type="text" value={this.state.company_name}
                         onChange={this.onChangeCompany_name} />
                    </div>
                    <div>
                        <label>Job_title</label>
                        <input type="tel" value={this.state.job_title} 
                        onChange={this.onChangeJob_title} />
                    </div>
                    <div>
                        <label>experience</label>
                        <input type="number" value={this.state.experience} 
                        onChange={this.onChangeExperience} />
                    </div>
                    <button type="button" className="btn btn-primary btn-block">
                    <a href="Personal_details" >Back </a> </button>
                    <button type="submit" className="btn btn-primary btn-block"> 
                    <a href="Email_verification" >Next </a></button>
                </form>
            </div>
        </div>
        );
    };
};