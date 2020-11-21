import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { SelectCurrentUserLogin, SelectIsAuth } from './../../redux/Auth_selectors';
import { logoutThunkCreator } from '../../redux/Auth_reducer';
import { Button, Col, Layout, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';

export type MapPropsType = {}


export const Header: React.FC<MapPropsType> = () => {

  const { Header } = Layout;

  const isAuth = useSelector(SelectIsAuth)
  const login = useSelector(SelectCurrentUserLogin)

  const dispatch = useDispatch()

  const logoutCallback = () => {
    dispatch(logoutThunkCreator())
  }
  return (<Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
    <Row>
      <Col span={19}></Col>
      {isAuth
        ? <>
          <Col span={1}>
            <Link to='/profile'><Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /></Link>
          </Col>
          <Col span={4}>
            <div style={{ color: '#fff' }}>{login} <Button style={{ marginLeft: 10 }} onClick={logoutCallback}>Log out</Button> </div>
          </Col>
        </>
        : <Col span={5}>
          <div><Button style={{ marginRight: 15 }}><Link to='/login'>Login</Link></Button>
            <Button><a target="_blank" href="https://social-network.samuraijs.com/signUp">Create an account</a></Button>
          </div>
        </Col>}

    </Row>
  </Header >
  )
}
