/**
 * Created by tengzhongwei on 2/24/17.
 */
import {Layout, Row, Menu} from 'antd'
import {Link} from 'dva/router'
const { Header, Footer, Content } = Layout;
import React from 'react'
import styles from '../less/components/PreviewLayout.less'
import HeaderTemp from './HeaderTemp'
import {connect} from 'dva'
import cookie from 'react-cookie'

class PreviewLayout extends React.Component{
  componentWillMount(){
    console.log(cookie.load('token'));
    //this.props.dispatch({type:'tokenCheck',payload:{}});
  }



  render(){
    const {children} = this.props;
    return(
      <div className={styles.div}>
        <Layout className={styles.index}>
          <Header className={styles.header}>
            <HeaderTemp>
              {cookie.load('token')?
                <Menu mode="horizontal" className={styles.menu}>
                  <Menu.Item key="classroom">
                    <Link to="/welcome"><p className={styles.item}>Classroom</p></Link>
                  </Menu.Item>
                </Menu>:
                <Menu mode="horizontal" className={styles.menu}>
                    <Menu.Item key="login">
                      <Link to="/login"><p className={styles.item}>Log In</p></Link>
                    </Menu.Item>
                    < Menu.Item key="register" >
                    <Link to="/register"><p className={styles.item}>Register</p></Link>
                    </Menu.Item>
                </Menu>}
            </HeaderTemp>
          </Header>
          <Content className={styles.content}>
            {cookie.load('token')?
              <div className={styles.welcomeback}>
                <p>Welcome Back</p>
                <p>Enjoy Your Writing Class</p>
                <Link to="/welcome">Classroom</Link>
              </div>:children
            }
          </Content>
          <Footer>
            <Row type="flex" justify="end">
              <p>Writing Together</p>
            </Row>
          </Footer>
        </Layout>
      </div>
  )}
}

// const mapStateToProps = (state)=>{
//   console.log(state.try.logged);
//   return{logged: state.try.logged};
// };


export default connect()(PreviewLayout)
