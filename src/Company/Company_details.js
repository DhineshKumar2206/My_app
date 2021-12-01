import React from 'react';

class Company_details  extends React.Component {

  userData;

    constructor(props) {
      super(props);
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
          fields["file"] = "";
          fields["emailid"] = "";
          fields["company_name"] = "";
          fields["job_title"] = "";
          fields["experience"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["file"]) {
        formIsValid = false;
        errors["file"] = "*Please choose your file.";
      }



      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["company_name"]) {
        formIsValid = false;
        errors["company_name"] = "*Please enter your company_name.";
      }

      if (typeof fields["company_name"] !== "undefined") {
        if (!fields["company_name"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["company_name"] = "*Please enter valid company_name.";
        }
      }

      if (!fields["job_title"]) {
        formIsValid = false;
        errors["job_title"] = "*Please enter your job_title.";
      }

      if (typeof fields["job_title"] !== "undefined") {
        if (!fields["job_title"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["job_title"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["experience"]) {
        formIsValid = false;
        errors["experience"] = "*Please enter your experience.";
      }

      if (typeof fields["experience"] !== "undefined") {
        if (!fields["experience"].match(/^[0-9]$/)) {
          formIsValid = false;
          errors["experience"] = "*Please enter alphabet characters only.";
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
              file: this.userData.file,
              emailid: this.userData.emailid,
              company_name: this.userData.company_name,
              job_title: this.userData.job_title,
              experience: this.userData.experience,

          })
      } else {
          this.setState({
            file: '',
            emailid: '',
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
    <div id="main-registration-container">
     <div id="register">
        <h3 className="heading">Company_details</h3>
        <form name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>File</label>
        <input type="file" name="file" value={this.state.fields.file} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.file}</div>
        <label>Email ID:</label>
        <input className="form_input" type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <label>Company_name:</label>
        <input className="form_input" type="text" name="company_name" value={this.state.fields.company_name} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.company_name}</div>
        <label>Job_title:</label>
        <input className="form_input" type="text" name="job_title" value={this.state.fields.job_title} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.job_title}</div>
        <label>Experience:</label>
        <input className="form_input" type="text" name="experience" value={this.state.fields.experience} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.experience}</div>
        <a className="style" href="/" >  <button type="button" className="button" >
        Back  </button></a>
        <a className="style" href="Email_verification" >  <button type="submit" className="button"> 
        Next </button></a>
        </form>
    </div>
</div> 

      );
  };
};


export default Company_details ;


