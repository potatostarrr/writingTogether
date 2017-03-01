/**
 * Created by tengzhongwei on 2/24/17.
 */
import {Layout, Row, Menu} from 'antd'
import {Link} from 'dva/router'
const { Header, Footer, Content } = Layout;
import React from 'react'
import styles from './BasicLayout.less'
import HeaderTemp from './HeaderTemp'
import LoginButton from './LoginButton'

export default ({children})=>{
  //<Link to="/login"><p className={styles.item}>Log In</p></Link>
  return(
    <div>
      <Layout className={styles.index}>
        <Header className={`${styles.header} ${styles.index}`}>
          <HeaderTemp>
            <Menu mode="horizontal" className={styles.menu}>
              <Menu.Item key="login" >
                <Link to="/login"><p className={styles.item}>Log In</p></Link>
              </Menu.Item>
              <Menu.Item key="register" >
                <Link to="/register"><p className={styles.item}>Register</p></Link>
              </Menu.Item>
            </Menu>
          </HeaderTemp>
        </Header>
        <Content className={styles.content}>
          {children}
        </Content>
        <Footer>
          <Row type="flex" justify="end">
            <Link to="main">This is Footer!</Link>
          </Row>
        </Footer>
      </Layout>
    </div>
  )
}
