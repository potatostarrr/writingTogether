import { Layout, Menu, Icon, Row,Col, Card} from 'antd';
const { Header, Sider, Content } = Layout;
import styles from '../../less/components/MainpageLayout.less'
import {connect} from 'dva'
import MainPageHeader from './MainPageHeader'

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
                  <Card title="Blulletin Board" bodyStyle={{backgroundColor:"white", color:"black"}}
                        className={styles.board}>
                    <div className={styles.board_content}>
                      <p>Your Stars: <Icon type="star" style={{color:"#FF9933" }} /> 17</p>
                      <br/>
                      <p>
                        1. This week, we will learn how to write a narrative writing.
                        <br/>
                        2. There are three lesson videos for you to watch.
                        <br/>
                        3. We will have several writing assignments to finish together.
                        <br/>
                        4. We will choose 3 best stories for
                        publication.
                        <br/>
                        5. If you have some good stories to write, you can record the titles and topics of your stories in writing topic section.
                      </p>
                    </div>
                  </Card>
                </Row>
                <Row>
                  <Col span={11} >
                    <Card>
                      <p>Syllbus</p>
                      <p>Here</p>
                    </Card>
                  </Col>
                  <Col offset={2} span={11}>
                    <Card >
                      <p>Writing</p>
                      <p>Checklist</p>
                    </Card>
                  </Col>
                </Row>
                <Row style={{marginTop:32}}>
                  <Card title="Link" className={styles.card}
                        bodyStyle={{backgroundColor:"white", color:"black"}}>
                    <Row >
                      <Col span={11}>
                        <Card>
                          1
                        </Card>
                      </Col>
                      <Col  offset={2} span={11}>
                        <Card>
                          2
                        </Card>
                      </Col>
                    </Row>
                    <Row style={{marginTop:18}}>
                      <Col span={11}>
                        <Card>
                          1
                        </Card>
                      </Col>
                      <Col  offset={2} span={11}>
                        <Card>
                          2
                        </Card>
                      </Col>
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
