import React from 'react';

class Personal_details  extends React.Component {
 userData;

    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["gender"] = "";
          fields["country"] = "";
          fields["state"] = "";
          fields["city"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["gender"]) {
        formIsValid = false;
        errors["gender"] = "*Please select your gender.";
      }

      if (!fields["country"]) {
        formIsValid = false;
        errors["country"] = "*Please enter your country.";
      }

      if (typeof fields["country"] !== "undefined") {
        if (!fields["country"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["country"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["state"]) {
        formIsValid = false;
        errors["state"] = "*Please enter your state.";
      }

      if (typeof fields["state"] !== "undefined") {
        if (!fields["state"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["state"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["city"]) {
        formIsValid = false;
        errors["city"] = "*Please enter your city.";
      }

      if (typeof fields["city"] !== "undefined") {
        if (!fields["city"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["city"] = "*Please enter alphabet characters only.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;

    }

    componentDidMount() {
      this.userData = JSON.parse(localStorage.getItem('user'));

      if (localStorage.getItem('user')) {
          this.setState({
            username: this.userData.username,
            gender: this.userData.gender,
            country: this.userData.country,
            state: this.userData.state,
            city: this.userData.city,

          })
      } else {
          this.setState({
            username: '',
            gender: '',
            country: '',
            state: '',
            city: '',

          })
      };
  };

  componentWillUpdate(nextProps, nextState) {
      localStorage.setItem('user', JSON.stringify(nextState));
  };

  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3 className="heading">Personal_details</h3>
        <form name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>Name:</label>
        <input className="form_input" type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>
        <label>Gender:</label>
        <select name="gender" id="dropdown" value={this.state.fields.gender} 
            onChange={this.handleChange} >    
           <option value="select">--Select--</option>    
           <option value="male">Male</option>    
           <option value="female">Female</option>    
           <option value="female">Other</option>    
         </select>   
        <div className="errorMsg">{this.state.errors.gender}</div>
        <label>Country:</label>
        <input className="form_input" type="text" name="country" value={this.state.fields.country} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.country}</div>
        <label>State:</label>
        <input className="form_input" type="text" name="state" value={this.state.fields.state} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.state}</div>
        <label>City:</label>
        <input className="form_input" type="text" name="city" value={this.state.fields.city} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.city}</div>
         {/* <input type="submit" className="button"  value="Next"/> */}
         <a className="style" href="Company_details" > 
          <button type="submit"  className="button" >
         Next </button></a>
        </form>
    </div>
</div>

      );
  };
};


export default Personal_details ;


