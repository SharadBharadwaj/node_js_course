import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
  state = {
    searchUser: ''
  }  
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }


  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearSearchUser: PropTypes.func.isRequired,
    showClearBtn: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  }


  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchUser === '') {
      this.props.setAlert('Please enter text..', 'light');
    } else {
      this.props.searchUser(this.state.searchUser);
      this.setState({searchUser: ''});
    }
  }

  
  render() {
    const {clearSearchUser, showClearBtn} = this.props;
    
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} className="form">
            <input 
                type='text' 
                name='searchUser' 
                placeholder='Serch Users..'
                value={this.state.searchUser}
                onChange={this.onChange}
            /> 
            <input 
                type='submit' 
                value='Search' 
                className='btn btn-dark btn-block'
            /> 
        </form>
        {showClearBtn &&
            <button 
                className='btn btn-light btn-block' 
                onClick={clearSearchUser}
            >
                Clear
            </button>
        }
      </div>
    )
  }
}

export default Search
