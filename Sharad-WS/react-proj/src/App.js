import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './App.css';

class App extends Component{
  state = {
    users: [],
    loading: false,
    emptyTextAlert: null 
  }
  /*async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data, loading: false})
  }*/
  
  searchGithubUser = async (userName) => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${userName}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data.items, loading: false})

  }

  clearGithubUser = () => {
    this.setState({users: [], loading: false});
  }

  setEmptyTextAlert = (msg, type) => {
    this.setState({emptyTextAlert: {msg, type}});
    setTimeout(() => this.setState({alert: null}), 5000  )
  }

  render(){
    return (
      <div className='App'>
        <Navbar></Navbar>
        <div className="container">
          <Alert alert={this.state.emptyTextAlert}></Alert>
        <Search 
          searchUser={this.searchGithubUser} 
          clearSearchUser={this.clearGithubUser}
          showClearBtn={this.state.users.length > 0 ? true : false}
          setAlert={this.setEmptyTextAlert}
        />
        <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    )

    }
}

export default App;
