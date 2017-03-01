/**
 * Created by tengzhongwei on 2/24/17.
 */
import {Layout, Row, Menu, Icon} from 'antd'
import {Link} from 'dva/router'
const { Header, Footer, Content } = Layout;
import React from 'react'
import styles from './BasicLayout.less'
import HeaderTemp from './HeaderTemp'
export default ({children})=>{
  return(
    <div>
      <Layout>
        <Header className={styles.header}>
          <HeaderTemp>
            <Icon type="smile-o" />
            Stars: 15
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
