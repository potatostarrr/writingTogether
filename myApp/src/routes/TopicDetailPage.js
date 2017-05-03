/**
 * Created by tengzhongwei on 5/1/17.
 */
import TopicDetailLayout from '../components/WritingTopic/TopicDetailLayout'
import HeadshotArea from '../components/plugin/HeadshotArea'
import {Row} from 'antd'
import CommentsBox from '../components/CommentsBox'

class TopicDetailPage extends React.Component{
  render(){
    return(
    <TopicDetailLayout>
      <Row type="flex" justify="space-around" >
        <p style={{fontSize:24, marginBottom:24}}>Peer's Writing Topic</p>
      </Row>
      <Row>
        <HeadshotArea/>
      </Row>
      <Row type="flex" justify="space-around" style={{marginTop:24}}>
        <CommentsBox hint="Today, I want to write..."/>
      </Row>

    </TopicDetailLayout>
    )
  }
}

export default TopicDetailPage;
