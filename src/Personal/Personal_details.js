import React, { Component } from 'react';
import './Personal.css';

export default class Personal_details extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            name: '',
            gender:'',
            country: '',
            state: '',
            city:'',
         

        }
        // this.handleChange = this.handleChange.bind(this);
        // this.submituserRegister = this.submituserRegister.bind(this);
    }


    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeGender(e) {
        this.setState({ gender: e.target.value })
    }

    onChangeCountry(e) {
        this.setState({ country: e.target.value })
    }

    onChangeState(e) {
        this.setState({ state: e.target.value })
    }
    onChangeCity(e) {
        this.setState({ city: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                gender : this.userData.gender,
                country : this.userData.country,
                state: this.userData.state,
                city: this.userData.city
            })
        } else {
            this.setState({
                name: '',
                gender:'',
                country: '',
                state: '',
                city:''
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
                        <label>Name</label>
                        <input type="text" value={this.state.name} 
                              onChange={this.onChangeName} />
                    </div>
                    <div>
                        <label>Gender</label>
                        <select name="gender" id="dropdown"  value={this.state.gender}
                            onChange={this.onChangeGender}  >    
                        <option value="select">--Select--</option>   
                        <option value="male">Male</option>  
                        <option value="female">Female</option> 
                        <option value="female">Other</option>  
                       </select>  
                    </div>
                    <div>
                        <label>Country</label>
                        <input type="text" value={this.state.country} 
                        onChange={this.onChangeCountry} />
                    </div>
                    <div>
                        <label>State</label>
                        <input type="text" value={this.state.state} 
                        onChange={this.onChangeState} />
                    </div>
                    <div>
                        <label>City</label>
                        <input type="text" value={this.state.city} 
                        onChange={this.onChangeCity} />
                    </div>
                   
                    <button type="submit" className="btn btn-primary btn-block">
                    <a href="Company_details" >Next </a>
                    </button>
                   
                </form>
            </div>
         </div>
        );
    };
};