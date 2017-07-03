import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Home } from 'components'

const propTypes = {}

const defaultProps = {}

class HomeContainer extends Component {
  render() {
    return (
      <Home />
    )
  }
}

HomeContainer.propTypes = propTypes

HomeContainer.defaultProps = defaultProps

export default HomeContainer
