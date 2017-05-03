/**
 * Created by tengzhongwei on 5/1/17.
 */
import {Card,Row,Col} from 'antd'
import Headshot from './Headshot'

class HeadshotArea extends React.Component{
  render(){
    return(
      <Card>
        <Row  type="flex" justify="space-around" >
          <Col>
            <Headshot url="https://media4.giphy.com/media/3o8doNAGKZXsrsgzW8/200_s.gif"/>
          </Col>
          <Col>
            <Headshot url="https://media4.giphy.com/media/3o8doNAGKZXsrsgzW8/200_s.gif"/>
          </Col>
          <Col>
            <Headshot url="https://media4.giphy.com/media/3o8doNAGKZXsrsgzW8/200_s.gif"/>
           </Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col>
            <Headshot url="https://media4.giphy.com/media/3o8doNAGKZXsrsgzW8/200_s.gif"/>
          </Col>
          <Col>
            <Headshot url="https://media4.giphy.com/media/3o8doNAGKZXsrsgzW8/200_s.gif"/>
          </Col>
          <Col>
            <Headshot url="https://media4.giphy.com/media/3o8doNAGKZXsrsgzW8/200_s.gif"/>
          </Col>
        </Row>
      </Card>
    )
  }
}

export default HeadshotArea;
