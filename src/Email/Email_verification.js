import React from 'react';

class Email_verification  extends React.Component {

  userData;

    constructor()
     {
      super();

      this.state = { fields: {}, errors: {} }
      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) 
    {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({ fields });
      this.setState({ otp: e.target.value })
  }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["otp"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["otp"]) {
        formIsValid = false;
        errors["otp"] = "*Please enter your otp.";
      }

      if (typeof fields["otp"] !== "undefined") {
        if (!fields["otp"].match(/^[0-9]{6}$/)) {
          formIsValid = false;
          errors["otp"] = "*Please enter valid 6-digit otp.";
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
    <div id="main-registration-container">
     <div id="register">
        <h3 className="heading">Email_verification</h3>
        <form name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>Otp</label>
        <input className="form_input" type="text" name="otp" value={this.state.fields.otp} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.otp}</div>
        {/* <input type="button" className="button"  value="Back"/><br />
        <input type="submit" className="button"  value="Verify"/> */}
        <a className="style" href="Company_details" > <button type="button" className="button" >
         Back  </button></a>
        <button type="submit" className="button" >Verify</button>
        </form>
    </div>
</div>

      );
  };

};


export default Email_verification ;


