import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
import styles from '../less/components/MainpageLayout.less'
import {Link} from 'dva/router'
import SideMenu from './SideMenu'

export default class SiderDemo extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <Layout className={styles.fullheight}>
        <Sider className = {styles.fullheight}>
          <SideMenu/>
        </Sider>
        <Layout className={styles.rightside}>
          <Header style={{ background: 'transparent', padding: 0 }}>
            <Icon
              className="trigger"
              type={'menu-fold'}
            />
            <span>Home</span>
          </Header>
          <Content className={styles.content} >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
