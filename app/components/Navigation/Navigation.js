import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, FlatButton, IconButton } from 'material-ui'
import { container, navContainer, link, appBar } from './styles.css'
import NavigationHome from 'material-ui/svg-icons/action/home'
import FaGithub from 'react-icons/lib/fa/github'

NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired
}

ActionLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired
}

Navigation.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

function NavLinks ({isAuthed}) {
  return isAuthed === true
    ? <ul>
        <li><Link to='/' className={link}>{'Home'}</Link></li>
      </ul>
    : <noscript />
}

function ActionLinks ({ isAuthed, link }) {
  return isAuthed === true
    ? <IconButton href={link} target="_blank">
        <FaGithub />
      </IconButton>
    : <FlatButton label="Login" />
}

export default function Navigation ({isAuthed, title, link}) {
  return (
    <AppBar title={title} className={appBar}
      iconElementLeft={<IconButton><NavigationHome /></IconButton>} 
      iconElementRight={<ActionLinks isAuthed={isAuthed} link={link} />}
      onLeftIconButtonTouchTap={handleLeftIconButtonTouchTap} 
      zDepth={4} />
  )
}

const handleLeftIconButtonTouchTap = () => {
  console.log("handleLeftIconButtonTouchTap")
} 
