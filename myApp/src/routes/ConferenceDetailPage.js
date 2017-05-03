/**
 * Created by tengzhongwei on 5/1/17.
 */
import TopicDetailLayout from '../components/WritingConference/ConferenceDetailLayout'
import Headshot from '../components/plugin/Headshot'
import {Row,Card,Col} from 'antd'
import CommentsBox from '../components/CommentsBox'

class TopicDetailPage extends React.Component{
  render(){
    return(
    <TopicDetailLayout>
      <Row type="flex" justify="space-around" >
        <p style={{fontSize:24, marginBottom:24}}>Model Writing</p>
      </Row>
      <Row>
        <Card>
          <Row>
            <Col span={2} offset={4}>
              <h3>Conference Guide</h3>
            </Col>
            <Col span={16} offset={2}>
              <Card >
                <h3>This is Instructions</h3>
              </Card>
            </Col>
          </Row>
        </Card>
      </Row>
      <Row style={{marginTop:48}}>
        <Col offset={3} span={2}>
          <h4>Question:</h4>
        </Col>
        <Col offset={1} span={14}>
          <h4>What are the advantages and disadvantages of my writings? How should I improve them? </h4>
        </Col>
      </Row>
      <Row type="flex" justify="space-around" style={{marginTop:24}}>
        <CommentsBox hint="I think ..."/>
      </Row>
      <Row style={{marginTop:60}}>
        <Col offset={2} span={4}>
          <Headshot url="https://media4.giphy.com/media/3o8doNAGKZXsrsgzW8/200_s.gif"/>
        </Col>
        <Col span={16} >
          <Card title="FeedBack">
            This is FeedBack
          </Card>
        </Col>
      </Row>

    </TopicDetailLayout>
    )
  }
}

export default TopicDetailPage;
