import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Redirect, Route, withRouter } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import HeaderContainer from './components/Header/HeaderContainer';
import { LoginPage } from './components/login/login';
import { connect, Provider } from 'react-redux';
import { initialiseApp } from './redux/App_reducer'
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';
import store, { appStateType } from './redux/redux-store';
import { UsersPage } from './components/Users/UsersContainer';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initialiseApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {

  componentDidMount() {
    this.props.initialiseApp()
    window.addEventListener("error", function (e) {
      console.log("Error occurred: " + e.error.message);
      return false;
    })
  }

  componentWillUnmount() {
    window.removeEventListener("error", function (e) {
      console.log("Error occurred: " + e.error.message);
      return false;
    })
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
            <Route exact path='/' render={() => <Redirect to='/profile' />} />
            <Route path='/login' render={() => <LoginPage />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersPage pageTitle={'Users'} />} />
            <Route path='/news' render={News} />
            <Route path='/music' render={Music} />
            <Route path='/settings' render={Settings} />
            {/* <Route path='*' render={() => <div>404 NOT FOUND </div>} /> */}
          </div>
        </Suspense>
      </div>
    )
  }
}


const mapStateToProps = (state: appStateType) => ({
  initialised: state.app.initialised
})


let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initialiseApp }))(App)

let MainApp: React.FC = () => {
  return <BrowserRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default MainApp