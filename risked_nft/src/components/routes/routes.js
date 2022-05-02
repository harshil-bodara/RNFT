import React, {Fragment} from 'react'
import { Route, Switch } from 'react-router-dom'

import MainHeader from '../layout/mainheader'
import Sidebar from '../layout/sidebar'
import Coupon from '../coupon'
import MainMenu from '../layout/mainmenu'

import Speculators from '../speculators/index'
import Profile from '../profile/index'
import ProfileEdit from '../profileedit/index'

const Routes = () => {
  console.log(123123)
  return (
    <Fragment>
    <MainHeader />
    <MainMenu />
      <div className='main-game-section'>
        <Sidebar />
        <Switch>
          <Route exact path='/speculators' component={Speculators} />
          <Route exact path='/myprofile' component={Profile} />
          <Route exact path='/profile-edit' component={ProfileEdit} />
        </Switch>
        <Coupon />
      </div>
    </Fragment>
  )
}

export default Routes