import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';

import MainHeader from '../layout/mainheader';
import Sidebar from '../layout/sidebar';
import Coupon from '../coupon';
import MainMenu from '../layout/mainmenu';

import Speculators from '../speculators/index';
import Profile from '../profile/index';
import ProfileEdit from '../profileedit/index';
import News from '../news';
import NewsDetail from '../news/details';
import Matches from '../matches';

const Routes = () => {
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
          <Route exact path='/news' component={News} />
          <Route exact path='/news/:id' component={NewsDetail} />
          <Route exact path='/matches' component={Matches} />
        </Switch>
        <Coupon />
      </div>
    </Fragment>
  )
}

export default Routes