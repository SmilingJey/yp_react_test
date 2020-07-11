import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({ user }) => {
  return (
    /*
      Вместо React.Fragment можно использовать 
      упрощенную запись <>
    */
    <React.Fragment>
      <h2>Профиль</h2>
      <p>Вас зовут: {user.name}</p>
    </React.Fragment>
  )
}

/*
  опечатка, должно быть Profile.propTypes
*/
Profile.proptypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default Profile
