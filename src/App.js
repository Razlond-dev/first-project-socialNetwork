import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';

import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';

import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/login/login';
import { connect, Provider } from 'react-redux';
import { initialiseApp } from './redux/App_reducer'
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';
import store from './redux/redux-store';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {

  componentDidMount() {
    this.props.initialiseApp()
  }

  render() {

    if (!this.props.initialised) {
      return <Preloader />
    }


    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <div className='app-wrapper-content'>
            <Route path='/login' render={() => <LoginPage />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer store={this.props.store} />} />
            <Route path='/dialogs' render={() => <DialogsContainer store={this.props.store} />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/news' render={News} />
            <Route path='/music' render={Music} />
            <Route path='/settings' render={Settings} />
          </div>
        </Suspense>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  initialised: state.app.initialised
})


let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initialiseApp }))(App)

let MainApp = (props) => {
  return <BrowserRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default MainApp