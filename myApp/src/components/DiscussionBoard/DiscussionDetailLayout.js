/**
 * Created by tengzhongwei on 4/14/17.
 */
import { Layout, Menu, Icon, Row,Col, Card, Pagination} from 'antd';
const { Header, Sider, Content } = Layout;
import styles from '../../less/components/MainpageLayout.less'
import {Link} from 'dva/router'
import {connect} from 'dva'
import MainPageHeader from '../MainPage/MainPageHeader'
class SiderDemo extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <Layout className={styles.rightside}>
        <Header className={styles.heading}>
          <MainPageHeader/>
        </Header>
        <Content className={styles.content} >
          <Row>
            <Col span={18}>
              {children}
            </Col>
            <Col span={6}>
              <Row>
                <Card title="Content" bodyStyle={{backgroundColor:"white", color:"black"}}
                      className={styles.board}>
                  <Card style={{marginBottom:24}}>
                    <Link to="discussion/unit1">Unit 1</Link>
                  </Card>
                  <Card style={{marginBottom:24}}>
                    Unit 2
                  </Card>
                  <Card style={{marginBottom:24}}>
                    Unit 3
                  </Card>
                  <Card style={{marginBottom:24}}>
                    Unit 4
                  </Card>
                  <Row type="flex" justify="space-around">
                    <Pagination  total={4} defaultPageSize={6}/>
                  </Row>
                </Card>
              </Row>
            </Col>


          </Row>
        </Content>
      </Layout>
    );
  }
}
/**
 * Created by tengzhongwei on 3/19/17.
 */
const mapStateToProps= (state)=>{
  return {currentLocation:state.try.currentLocation}
};



export default connect(mapStateToProps)(SiderDemo)
