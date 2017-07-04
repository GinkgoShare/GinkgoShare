import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navigation } from 'components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { container, innerContainer } from './styles.css'
import theme from "../../sharedStyles/theme"

const propTypes = {}

const defaultProps = {}

class MainContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={theme.muiTheme}>
        <div className={container}> 
          <Navigation isAuthed={true} title="GinkgoShare" link="https://github.com/GinkgoShare" />
          <div className={innerContainer}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

MainContainer.propTypes = propTypes

MainContainer.defaultProps = defaultProps

export default MainContainer
