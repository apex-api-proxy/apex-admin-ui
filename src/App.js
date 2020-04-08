import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ListServices from './components/ListServices/ListServices';
import ServicesIndex from './components/ServicesIndex/ServicesIndex';
import UpdateService from './components/UpdateService/UpdateService';
import NewService from './components/NewService/NewService';
import { serviceFormInputs } from './formInputs';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "service-hosts": {
        "dagpay": "dagpayapi.azurewebsites.net",
        "cnn": "edition.cnn.com",
        "bbc": "bbc.co.uk",
      },
      "custom-configurations": {

      },
      "activeServiceEditForm": {
        "name": "",
        "password": "",
        "address": "",
      },
    }
  }

  componentDidMount() {
    this.setState({

    });
  }

  handleServiceEditClick = (serviceName) => {
    console.log(serviceName);
    const activeForm = this.state["activeServiceEditForm"]["name"] === serviceName ? null : serviceName;

    this.setState({
      "activeServiceEditForm": { "name": activeForm},
    })
  };

  handleFormInputChange = (e) => {
    console.log(e.target.dataset.parameter);
    const updatedServiceEditform = this.state["activeServiceEditForm"];
    updatedServiceEditform[e.target.dataset.parameter] = e.target.value;

    this.setState(prevState => {
      return {
        ...prevState,
        "activeServiceEditForm": updatedServiceEditform,
      };
    })
  };

  render() {
    const services = Object.keys(this.state["service-hosts"])
    .sort()
    .map((host) => {
      let returnObject = {};
      returnObject["name"] = host;
      returnObject["address"] = this.state["service-hosts"][host];
      return returnObject;
    });

    const listServices = {
      services: services,
      onEditServiceClick: this.handleServiceEditClick,
      formInputChange: this.handleFormInputChange,
    };

    const newService = {
      inputs: serviceFormInputs,
      formInputChange: this.handleFormInputChange,
    }

    return (
      <div>
        <Header />
        <Route path='/' exact render={(listProps) => <ServicesIndex listServices={listServices} newService={newService} activeEditForm={this.state["activeServiceEditForm"]["name"]} />} />
        <Route path='/services' exact render={(listProps) => <ListServices services={services}  activeEditForm={this.state["activeServiceEditForm"]["name"]} onEditServiceClick={this.handleServiceEditClick} formInputChange={this.handleFormInputChange}/>} />
        <Route path='/configuration' exact render={(listProps) => <ListServices services={services} />} />
        <Footer />
      </div>
    );
  }
}

export default App;

// <Route path='/' exact render={(listProps) => <ListServices services={services} />} />
// <Route path='/update' exact render={(updateProps) => <UpdateService {...updateProps} />} />
// <Route path='/new' exact render={(newProps) => <NewService {...newProps} />} />

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