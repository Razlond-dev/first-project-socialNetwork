import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Redirect, Route, withRouter, NavLink } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import { LoginPage } from './components/login/login';
import { connect, Provider } from 'react-redux';
import { initialiseApp } from './redux/App_reducer'
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';
import store, { appStateType } from './redux/redux-store';
import { UsersPage } from './components/Users/UsersContainer';
import 'antd/dist/antd.css';
import { Col, Layout, Menu, Row } from 'antd';
import { UploadOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import { Header } from './components/Header/Header'
import logo from './assets/images/logo.png'

const { Content, Footer, Sider } = Layout;

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

      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >

          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="logo" style={{ height: 100 }}>
              <NavLink to="/profile" activeClassName={'activeLink'}><div ><img style={{ height: 125, objectFit: "contain" }} src={logo} /></div> </NavLink>
            </Menu.Item>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <NavLink to="/profile" activeClassName={'activeLink'}>Profile</NavLink>

            </Menu.Item>
            <Menu.Item key="2" icon={<MessageOutlined />}>
              <NavLink to="/dialogs" activeClassName={'activeLink'}>Messages</NavLink>

            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <NavLink to="/users" activeClassName={'activeLink'}>Users</NavLink>

            </Menu.Item>

          </Menu>




        </Sider>
        <Layout>
          <Header />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

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
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2020 Created by Nazar Pidhirnyi</Footer>
        </Layout>
      </Layout>


      // <div className='app-wrapper'>
      //   <HeaderContainer />
      //   <Navbar />
      //   <Suspense fallback={<div>Loading...</div>}>
      //     <div className='app-wrapper-content'>
      //       <Route exact path='/' render={() => <Redirect to='/profile' />} />
      //       <Route path='/login' render={() => <LoginPage />} />
      //       <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
      //       <Route path='/dialogs' render={() => <DialogsContainer />} />
      //       <Route path='/users' render={() => <UsersPage pageTitle={'Users'} />} />
      //       <Route path='/news' render={News} />
      //       <Route path='/music' render={Music} />
      //       <Route path='/settings' render={Settings} />
      //       {/* <Route path='*' render={() => <div>404 NOT FOUND </div>} /> */}
      //     </div>
      //   </Suspense>
      // </div>
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