/**
 * Created by tengzhongwei on 3/1/17.
 */
import {Link, browserHistory} from 'dva/router'
import { Menu, Icon,  Layout} from 'antd';

import styles from '../less/components/SideMenu.less'
const {Sider} = Layout;
import {connect} from 'dva'

class SideMenu extends React.Component {

  componentWillMount(){
    if(this.props.token){
      return null;
    }
  }


  //defaultSelectedKeys={['1']}
  menuClick = (e)=> {
    this.props.dispatch({type:'try/menuClick', payload:{selectedMenu:e.key}});
    browserHistory.push('/courses');
  };

  render() {
    return (
      <div className={styles.full}>
        <div className={styles.logo} >
          <Icon type="heart" /><span>   Writing Together</span>
        </div>

        <Menu theme="dark" mode="inline" className={styles.topMenu}
              defaultSelectedKeys={this.props.selectedMenu?[this.props.selectedMenu]:[]}
              onClick={this.menuClick}>
          <Menu.Item key="courses" className={styles.item}>
            <Icon type="user" />
            <span className="nav-text">Mini-Lesson</span>
          </Menu.Item>
          <Menu.Item key="writingTopic" className={styles.item}>
            <Icon type="video-camera" />
            <span className="nav-text">Writing Topic</span>
          </Menu.Item>
          <Menu.Item key="discussionBoard" className={styles.item}>
            <Icon type="upload" />
            <span className="nav-text">Discussion Board</span>
          </Menu.Item>
          <Menu.Item key="reading" className={styles.item}>
            <Icon type="user" />
            <span className="nav-text">Reading</span>
          </Menu.Item>
          <Menu.Item key="modelWriting" className={styles.item}>
            <Icon type="video-camera" />
            <span className="nav-text">Model Writing</span>
          </Menu.Item>
          <Menu.Item key="myWriting" className={styles.item}>
            <Icon type="upload" />
            <span className="nav-text">My Writing</span>
          </Menu.Item>
          <Menu.Item key="writingConference" className={styles.item}>
            <Icon type="user" />
            <span className="nav-text">Writing Conference</span>
          </Menu.Item>
          <Menu.Item key="groupWork" className={styles.item}>
            <Icon type="video-camera" />
            <span className="nav-text">Group Work</span>
          </Menu.Item>

        </Menu>


        <Menu theme="dark" mode="inline" className={styles.bottomMenu}>
          <Menu.Item key="logout">
            <Icon type="user" />
            <span className={styles.navText}><Link to="/">Log Out</Link></span>
          </Menu.Item>
          <Menu.Item key="setting">
            <Icon type="video-camera" />
            <span className="nav-text">Setting</span>
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
