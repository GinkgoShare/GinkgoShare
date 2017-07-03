import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { MainContainer, HomeContainer } from 'containers'

const routes = (
  <BrowserRouter>
    <MainContainer>
      <Route exact path="/" component={HomeContainer} />
    </MainContainer>
  </BrowserRouter>
)

export default routes
