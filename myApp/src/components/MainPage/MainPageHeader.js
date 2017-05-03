/**
 * Created by tengzhongwei on 5/1/17.
 */

import { Menu, Icon, Row,Col} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import styles from '../../less/components/MainpageLayout.less'
import {Link} from 'dva/router'
class MainPageHeader extends React.Component{
  render(){
    const sun = require('../../assets/SunIcon.png');
    return(
      <Row style={{height:'inherit'}}>
        {/*<b>{this.props.currentLocation}</b>*/}
        {/*<StarLogo/>*/}
        <Col span={12}>
          <img src={sun}
          className={styles.sunIcon}/>
          <Link to="/welcome"><b style={{color:'white', fontSize:"18px"}}>Writing Together</b></Link>
        </Col>

        <Row type="flex" justify='end'>
          <Menu mode="horizontal" className={styles.topMenu}>
            <SubMenu key="sub1" title={<span><Icon type="bars" /></span>}>
              <MenuItemGroup title="Item 1" >
                <Menu.Item key="1"><Link to="lessons/units">Mini Lesson</Link></Menu.Item>
                <Menu.Item key="2"><Link to="discussion/units">Discussion Board</Link></Menu.Item>
                <Menu.Item key="3"><Link to="model/units">Model Writing</Link></Menu.Item>
                <Menu.Item key="4"><Link to="topic/units">Writing Topic</Link></Menu.Item>
                <Menu.Item key="5"><Link to="reading/units"> Reading</Link></Menu.Item>
                <Menu.Item key="6"><Link to="my-writing/units">My Writing</Link></Menu.Item>
                <Menu.Item key="7"><Link to="conferences">Writing Conference</Link></Menu.Item>
                <Menu.Item key="8"><Link to="publication">Publication</Link></Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="9"><Link to="diary"><Icon type="book" style={{color:"white"}}/></Link></Menu.Item>
            <Menu.Item key="10"><Icon type="message" style={{color:"white"}}/></Menu.Item>
          </Menu>
        </Row>

      </Row>
    )
  }
}
export default MainPageHeader;
