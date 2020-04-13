import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ListServices from './components/ListServices/ListServices';
import ServicesIndex from './components/ServicesIndex/ServicesIndex';
import UpdateService from './components/UpdateService/UpdateService';
import NewService from './components/NewService/NewService';
import CustomServiceConfiguration from './components/CustomServiceConfiguration/CustomServiceConfiguration';
import QueryLogs from './components/QueryLogs/QueryLogs';
import { serviceFormInputs, configFormInputs, logsFormInputs } from './formInputs';
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
      "configForm": {
        "reqServiceName": "",
        "resServiceName": "",
        "configuration": {},
      },
      "configUpdateSuccess": false,
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
      "queryLogsForm": {
        "correlationId": "",
      },
      "token": "",
      "logs": [],
    }
  }

  componentDidMount() {
    this.fetchServiceHosts();
  }

  fetchServiceHosts = () => {
    fetch(`${baseURL}/services/`, {
      method: 'GET'
    })
    .then(response => {
      response.json()
      .then(data => {
        this.setState(prevState => {
          return { 
            ...prevState,
            "service-hosts": data,
          }
        })
      })
      .catch(error => console.log('Processing JSON failed: ', error))
    })
    .catch(error => console.log('Something went wrong: ', error));
  };

  fetchConfiguration = () => {
    fetch(`${baseURL}/services/${this.state["configForm"]["reqServiceName"]}/${this.state["configForm"]["resServiceName"]}`, {
      method: 'GET'
    })
    .then(response => {
      console.log('response: ', response);
      response.json()
      .then(data => {
        console.log('Config fetched!');

        this.setState(prevState => {
          const configForm = prevState["configForm"];
          configForm["configuration"] = (!!data ? data : {});

          return { 
            ...prevState,
            "configForm": configForm,
          }
        });

        // manually set value in controlled textarea component
        document.getElementById('customConfig').value = JSON.stringify(data);
        console.log('data: ', data);
      })
      .catch(error => console.log('Processing JSON failed: ', error))
    })
    .catch(error => console.log('Something went wrong: ', error));
  };

  handleServiceEditClick = (serviceName) => {
    console.log(serviceName);
    const activeForm = this.state["activeServiceEditForm"]["name"] === serviceName ? null : serviceName;
    const address = activeForm ? this.state["service-hosts"][serviceName] : "";

    this.setState({
      "activeServiceEditForm": { "name": activeForm, "address": address},
    })
  };

  handleAddFormInputChange = (e) => {
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
    const updatedServiceEditForm = this.state["activeServiceEditForm"];
    updatedServiceEditForm[e.target.dataset.parameter] = e.target.value;

    this.setState(prevState => {
      return {
        ...prevState,
        "activeServiceEditForm": updatedServiceEditForm,
      };
    })
  };

  handleConfigFormInputChange = (e) => {
    e.preventDefault();
    this.clearUpdateSuccessMessage();

    const updatedConfigForm = this.state["configForm"];
    const value = (e.target.dataset.parameter === "configuration" ? JSON.parse(e.target.value) : e.target.value)
    updatedConfigForm[e.target.dataset.parameter] = value;

    this.setState(prevState => {
      return {
        ...prevState,
        "configForm": updatedConfigForm,
      };
    })

    if (e.target.dataset.parameter !== "configuration") {
      this.fetchConfiguration();
    }
  };

  handleLogsFormInputChange = (e) => {
    e.preventDefault();
    const queryLogsForm = this.state["queryLogsForm"];
    queryLogsForm[e.target.dataset.parameter] = e.target.value;

    this.setState(prevState => {
      return {
        ...prevState,
        "queryLogsForm": queryLogsForm,
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
        this.displayToken(formData["name"], formData["password"]);
        this.fetchServiceHosts();
      } else {
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
    console.log('outgoing body: ', body);

    fetch(`${baseURL}/services/`, 
      { method: 'PUT', 
        body: body,
        headers: { 'Content-type': 'application/json' }
      }
    )
    .then(response => {
      if (response.status === 200) {
        console.log('Edit form update success');
        this.displayToken(formData["name"], formData["password"]);
        this.fetchServiceHosts();
      } else {
        console.log(response.body);
      }
    })
    .catch(function(error) {
      console.log('An error occurred: ', error);
    });
  };

  handleConfigFormSubmit = (e) => {
    e.preventDefault();
    const formData = this.state["configForm"]["configuration"];
    const body = JSON.stringify(formData);
    console.log('outgoing body: ', body);

    fetch(`${baseURL}/services/${this.state["configForm"]["reqServiceName"]}/${this.state["configForm"]["resServiceName"]}`, 
      { method: 'POST', 
        body: body,
        headers: { 'Content-type': 'application/json' }
      }
    )
    .then(response => {
      if (response.status === 200) {
        this.setUpdateSuccessMessage();
      } else {
        console.log(response.body);
      }
    })
    .catch(function(error) {
      console.log('An error occurred: ', error);
    });
  };

  handleLogsFormSubmit = (e) => {
    e.preventDefault();
    const correlationId = this.state["queryLogsForm"]["correlationId"];

    fetch(`${baseURL}/logs/${correlationId}`, 
      { method: 'GET', 
        headers: { 'Content-type': 'application/json' }
      }
    )
    .then(response => {
      if (response.status === 200) {
        console.log('Query logs success');

        response.json()
        .then(data => {
          this.setState(prevState => {
            return { 
              ...prevState,
              "logs": data,
            }
          })
        })
        .catch(error => console.log('Processing JSON failed: ', error))
      } else {
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

  setUpdateSuccessMessage = () => {
    console.log('Setting update success message');

    this.setState(prevState => {
      return {
        ...prevState,
        "configUpdateSuccess": true,
      };
    });
  };

  clearUpdateSuccessMessage = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        "configUpdateSuccess": false,
      };
    });
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

    const options = [];

    for (const host in this.state["service-hosts"]) {
      options.push(host);
    }

    const listServices = {
      services: services,
      onEditServiceClick: this.handleServiceEditClick,
      activeEditServiceAddress: this.state["activeServiceEditForm"]["address"],
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
    };

    const configForm = {
      inputs: configFormInputs,
      options: options,
      formInputChange: this.handleConfigFormInputChange,
      submitForm: this.handleConfigFormSubmit,
    }

    const logsForm = {
      inputs: logsFormInputs,
      formInputChange: this.handleLogsFormInputChange,
      submitForm: this.handleLogsFormSubmit,
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route 
            path='/services' 
            render={() => 
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
            render={() => <CustomServiceConfiguration configForm={configForm} displayConfigUpdateSuccess={this.state["configUpdateSuccess"]} /> } 
          />
          <Route 
            path='/logs'
            exact 
            render={() => <QueryLogs logsForm={logsForm} /> } 
          />
          <Route 
            path='/' 
            render={() => 
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