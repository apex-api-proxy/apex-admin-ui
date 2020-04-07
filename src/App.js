import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "service-credentials": {

      },
      "service-hosts": {

      },
      "custom-configurations": {

      },
    }
  }

  componentDidMount() {
    

    this.setState({

    });



  }

  render() {
    return (
      <div>
        "Apex admin portal"
      </div>
    );
  }
}

export default App;

        // <TopNav />
        // <Route path='/new' exact component={NewService} />
        // <Route path='/update' exact component={UpdateService} />
        // <Route path='/custom' exact component={CustomServiceConfiguration} />

// Add new service
// * Service unique name
// * Password
// * Token
// * IP address
/*
{
  "name": "dagpay",
  "address": "dagpayapi.azurewebsites.net",
  "token": ""
}
*/

// Update service specs (cannot update name, as that requires programmatically changing 
// * Service (select via dropdown)
// * Token
// * IP address

// Add/Update custom service configuration logic
// * Calling service (select via dropdown)
// * Called service (select via dropdown)
// * * Timeout
// * * Max-Retry-Attempts
// * * Backoff