import './App.css';
import Personal_details from './Personal/Personal_details' ;
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Company_details from './Company/Company_details';
import Email_verification from './Email/Email_verification';

function App()
{
    return (
    <Router>
      <div className="App">
         <div className="ul">
          <ul >
            <li><Link to={'/Personal_details'} ><span>1</span> Personal Details </Link></li>
            <li><Link to={'/Company_details'}><span>2</span> Company Details</Link></li>
            <li><Link to={'/Email_verification'} ><span>3</span> Email Verification</Link></li>
          </ul>
          </div>
          </div>
          <Switch>
              <Route exact path='/Personal_details' component={Personal_details} />
              <Route path='/Company_details' component={Company_details} />
              <Route path='/Email_verification' component={Email_verification} />
          </Switch> 
      </Router>
    );
  }


export default App;
