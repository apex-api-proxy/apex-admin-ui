import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ListServices from './components/ListServices/ListServices';
import ServicesIndex from './components/ServicesIndex/ServicesIndex';
import UpdateService from './components/UpdateService/UpdateService';
import NewService from './components/NewService/NewService';
import { serviceFormInputs } from './formInputs';
import token from 'basic-auth-token';
import './App.css';

const baseURL = 'https://3.135.234.50:1990';
// const baseURL = 'localhost:1990';

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
      "addServiceForm": {
        "name": "",
        "password": "",
        "address": "",
      },
      "token": "",
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

  handleAddFormInputChange = (e) => {
    console.log(e.target.dataset.parameter);
    const addForm = this.state["addServiceForm"];
    addForm[e.target.dataset.parameter] = e.target.value;

    this.setState(prevState => {
      return {
        ...prevState,
        "addServiceForm": addForm,
      };
    })
  };

  handleEditFormInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.dataset.parameter);
    const updatedServiceEditForm = this.state["activeServiceEditForm"];
    updatedServiceEditForm[e.target.dataset.parameter] = e.target.value;

    this.setState(prevState => {
      return {
        ...prevState,
        "activeServiceEditForm": updatedServiceEditForm,
      };
    })
  };

  handleAddFormSubmit = (e) => {
    console.log('process.env.HTTPS: ', process.env.HTTPS);
    e.preventDefault();
    console.log('baseURL: ', baseURL);
    const formData = this.state["addServiceForm"];
    const body = JSON.stringify(formData);

    fetch(`${baseURL}/services/`, 
      { method: 'POST', 
        body: body,
        headers: { 'Content-type': 'application/json' }
      }
    )
    .then(response => {
      console.log(response);
      if (response.status === 201) {
        // this.displayResponse(response.body);
        this.displayToken(formData["name"], formData["password"]);
        console.log(response.body);
      } else {
        // this.displayResponse(response.body);
        console.log(response.body);
      }
    })
    .catch(function(error) {
      console.log('An error occurred: ', error);
    });
  };

  handleEditFormSubmit = (e) => {
    e.preventDefault();
    const formData = this.state["activeServiceEditForm"];
    const body = JSON.stringify(formData);

    fetch(`${baseURL}/services/`, 
      { method: 'PUT', 
        body: body,
        headers: { 'Content-type': 'application/json' }
      }
    )
    .then(response => {
      console.log(response);
      if (response.status === 201) {
        // this.displayResponse(response.body);
        console.log(response.body);
      } else {
        // this.displayResponse(response.body);
        console.log(response.body);
      }
    })
    .catch(function(error) {
      console.log('An error occurred: ', error);
    });
  };

  doneRecordingToken = (e) => {
    // e.preventDefault();

    this.setState(prevState => {
      return {
        ...prevState,
        "token": "",
      };
    })
  };

  displayToken = (name, password) => {
    this.setState(prevState => {
      return {
        ...prevState,
        "token": token(name, password),
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
      formInputChange: this.handleEditFormInputChange,
      submitForm: this.handleEditFormSubmit,
    };

    const newService = {
      inputs: serviceFormInputs,
      formInputChange: this.handleAddFormInputChange,
      submitForm: this.handleAddFormSubmit,
    };

    const tokenModal = {
      token: this.state["token"],
      onDoneRecordingToken: this.doneRecordingToken,
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route 
            path='/services' 
            render={(listProps) => 
              <ServicesIndex 
                listServices={listServices} 
                newService={newService} 
                activeEditForm={this.state["activeServiceEditForm"]["name"]}
                token={this.state["token"]}
                doneRecordingToken={this.doneRecordingToken}
              />
            } 
          />
          <Route 
            path='/configuration'
            exact 
            render={(listProps) => <ListServices services={services} /> } 
          />
          <Route 
            path='/' 
            render={(listProps) => 
              <ServicesIndex 
                listServices={listServices} 
                newService={newService} 
                activeEditForm={this.state["activeServiceEditForm"]["name"]}
                token={this.state["token"]}
                doneRecordingToken={this.doneRecordingToken}
              />
            } 
          />
        </Switch>
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