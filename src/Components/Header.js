import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onClick, showAdd}) => {
  return (
    <div className='header'>
        <h1>{title}</h1>
        <Button text={showAdd? "Close": "Add"} onClick={onClick} color={showAdd? "red": "green"}/>
    </div>
  )
}

// sets default props if no parameter is passed
Header.defaultProps = {
    title: "Task Tracker"
}

// set specific type of var to be passed 
// type safety
Header.propTypes = {
    title: PropTypes.string.isRequired // will return an error if a number is passed to title
}

export default Header