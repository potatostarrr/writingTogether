import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
import styles from './ContentLayout.less'
import {Link} from 'dva/router'


export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={styles.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">Mini-Lesson</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">Writing Topic</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">Discussion Board</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">Reading</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="video-camera" />
              <span className="nav-text">Model Writing</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="upload" />
              <span className="nav-text">My Writing</span>
            </Menu.Item>
            <Menu.Item key="8">
              <Icon type="user" />
              <span className="nav-text">Writing Conference</span>
            </Menu.Item>
            <Menu.Item key="9">
              <Icon type="video-camera" />
              <span className="nav-text">Group Word</span>
            </Menu.Item>

          </Menu>


          <Menu theme="dark" mode="inline" className={styles.bottomMenu}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className={styles.navText}><Link to="/">Log Out</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">Setting</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <span>Home</span>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}
