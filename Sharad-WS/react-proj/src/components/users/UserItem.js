import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({User: {login, avatar_url, html_url}}) => {
 
    return (
      <div className="card text-center">
        <img 
          src={avatar_url} 
          alt="" className='round-img' 
          style={{
            backgroundColor:'red', 
            width: '60px'
            }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn.btn-dark.btn-sm.my-1">more..</a>
        </div>

      </div>
    )
  }

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem
