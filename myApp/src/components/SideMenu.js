/**
 * Created by tengzhongwei on 3/19/17.
 */
/**
 * Created by tengzhongwei on 3/1/17.
 */
import {Link, browserHistory} from 'dva/router'
import { Menu, Icon,  Layout} from 'antd';

import styles from '../less/components/SideMenu.less'
const {Sider} = Layout;
import {connect} from 'dva'
import cookie from 'react-cookie'
import StarLogo from './StarLogo'
class SideMenu extends React.Component {

  componentWillMount(){
    if(this.props.token){
      return null;
    }
  }

  logOut = (e)=>{
    cookie.remove('token');
    console.log(cookie.load('token'));
    browserHistory.push('/');
  };


  //defaultSelectedKeys={['1']}
  menuClick = (e)=> {
    if(e.key!='logout'){
    this.props.dispatch({type:'try/menuClick', payload:{selectedMenu:e.key,currentLocation:e.item.props.id}});
    browserHistory.push('/'+ e.key);}
  };

  render() {
    return (
      <div className={styles.full}>
        <div className={styles.logo} >
          <Link to="welcome"><Icon type="heart"/><span>   Writing Together</span></Link>
        </div>

        <Menu mode="inline" className={styles.topMenu}
              defaultSelectedKeys={this.props.selectedMenu?[this.props.selectedMenu]:[]}
              onClick={this.menuClick}>
          <Menu.Item key="courses" id="Mini Lesson" className={styles.item}>
            <Icon type="user" />
            <span className="nav-text">Mini Lesson</span>
          </Menu.Item>
          <Menu.Item key="topic" id="Writing Topic" className={styles.item}>
            <Icon type="video-camera" />
            <span className="nav-text">Writing Topic</span>
          </Menu.Item>
          <Menu.Item key="discussionBoard" id="Discussion Board" className={styles.item}>
            <Icon type="upload" />
            <span className="nav-text">Discussion Board</span>
          </Menu.Item>
          <Menu.Item key="reading" id="Reading" className={styles.item}>
            <Icon type="user" />
            <span className="nav-text">Reading</span>
          </Menu.Item>
          <Menu.Item key="modelWriting" id="Model Writing" className={styles.item}>
            <Icon type="video-camera" />
            <span className="nav-text">Model Writing</span>
          </Menu.Item>
          <Menu.Item key="myWriting" id="My Writing" className={styles.item}>
            <Icon type="upload" />
            <span className="nav-text">My Writing</span>
          </Menu.Item>
          <Menu.Item key="conferences" id="Writing Conference" className={styles.item}>
            <Icon type="user" />
            <span className="nav-text">Writing Conference</span>
          </Menu.Item>
          <Menu.Item key="groupWork" id="Group Work" className={styles.item}>
            <Icon type="video-camera" />
            <span className="nav-text">Group Work</span>
          </Menu.Item>
        </Menu>

        <Menu theme="dark" mode="inline" className={styles.bottomMenu}
              defaultSelectedKeys={this.props.selectedMenu?[this.props.selectedMenu]:[]}
              onClick={this.menuClick}>
          <Menu.Item key="logout" id="Log Out">
            <Link to="/" onClick={this.logOut}>
              <Icon type="user" />
              <span className={styles.navText}>Log Out</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="profile" id="Profile">
            <Link to="/profile">
              <Icon type="video-camera" />
              <span className="nav-text">Profile</span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  const {selectedMenu, token, username} =state.try;
  return {selectedMenu, token, username}
};

export default connect(mapStateToProps)(SideMenu);
