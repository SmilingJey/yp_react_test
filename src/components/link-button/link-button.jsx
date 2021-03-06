import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const LinkButton = ({to, label}) => {
  return (
    /*
      Здесь получается кнопка обернутая в ссылку, что не валидно
    */
    <Link to={to}>
      <button>{label}</button>
    </Link>
  )
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default LinkButton
