import { Route, Routes as Switch } from 'react-router-dom'
import React, { lazy } from 'react'

const Home = lazy(() => import('../pages/Home'))
const NotFound = lazy(() => import('../pages/NotFound'))

export default (
    <Switch>
      <Route path='/' element={<Home />} />
      <Route path='*'  element={<NotFound />} />
    </Switch>
)