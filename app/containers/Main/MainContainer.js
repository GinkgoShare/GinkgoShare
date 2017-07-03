import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navigation } from 'components'
import { container, innerContainer } from './styles.css'

const propTypes = {}

const defaultProps = {}

class MainContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    console.log(<Navigation isAuthed={false} />)
    return (
      <div className={container}> 
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = propTypes

MainContainer.defaultProps = defaultProps

export default MainContainer
