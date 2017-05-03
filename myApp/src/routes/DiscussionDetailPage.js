/**
 * Created by tengzhongwei on 5/1/17.
 */
import TopicDetailLayout from '../components/DiscussionBoard/DiscussionDetailLayout'
import Headshot from '../components/plugin/Headshot'
import {Row,Card} from 'antd'
import CommentsBox from '../components/CommentsBox'

class TopicDetailPage extends React.Component{
  render(){
    return(
    <TopicDetailLayout>
      <Row type="flex" justify="space-around" >
        <p style={{fontSize:24, marginBottom:24}}>Discussion Board</p>
      </Row>
      <Row>
        <Card>
          <Row type="flex" justify="space-around" >
            <div>
              <Headshot url = "https://media4.giphy.com/media/3o8doNAGKZXsrsgzW8/200_s.gif" />
              <span>When you write a story, what are the most important elements? </span>
            </div>
          </Row>
        </Card>
      </Row>
      <Row type="flex" justify="space-around" style={{marginTop:56}}>
        <CommentsBox hint="For this question, I think..."/>
      </Row>

    </TopicDetailLayout>
    )
  }
}

export default TopicDetailPage;
