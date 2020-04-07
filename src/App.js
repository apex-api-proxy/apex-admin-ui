import React from 'react';
import { Route } from 'react-router-dom';
import ListServices from './components/ListServices/ListServices';
import UpdateService from './components/UpdateService/UpdateService';
import NewService from './components/NewService/NewService';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "service-credentials": {

      },
      "service-hosts": {
        "dagpay": "dagpayapi.azurewebsites.net",
        "cnn": "edition.cnn.com",
        "bbc": "bbc.co.uk",
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
    const services = Object.keys(this.state["service-hosts"])
    .sort()
    .map((host) => {
      let returnObject = {};
      returnObject["name"] = host;
      returnObject["address"] = this.state["service-hosts"][host];
      return returnObject;
    });

    return (
      <div>
        <Route path='/' exact render={(listProps) => <ListServices services={services} />} />
        <Route path='/update' exact render={(updateProps) => <UpdateService {...updateProps} />} />
        <Route path='/new' exact render={(newProps) => <NewService {...newProps} />} />
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