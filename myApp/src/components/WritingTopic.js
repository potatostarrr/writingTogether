/**
 * Created by tengzhongwei on 3/21/17.
 */
import CardLink from '../utils/CardLink'
import {connect} from 'dva'
import {Row,Col} from 'antd'

export default class WritingTopic extends React.Component{
  render(){
    return(
      <Row type='flex' justify='space-around'>
        <Col>
          <CardLink url="http://4.bp.blogspot.com/-QmcH6K464U8/U5mzUCQoc0I/AAAAAAAACis/hu2U9cwyUoE/s1600/benefits-teachers-large.png"
                    to="/topic/teacher" text="Teacher's Topic"
          />
        </Col>
        <Col>
          <CardLink url="http://cdn2.hubspot.net/hubfs/1973303/peer-relationships.jpg"
                    to="/topic/peers" text="Peers' Topic"
          />
        </Col>
      </Row>
    )
  }
}
