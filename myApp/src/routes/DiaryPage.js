/**
 * Created by tengzhongwei on 5/1/17.
 */
import TopicDetailLayout from '../components/MyDiary/DiaryLayout'
import Headshot from '../components/plugin/Headshot'
import {Row,Card,Col, Button} from 'antd'
import Editor from '../components/plugin/EditorPage'
class TopicDetailPage extends React.Component{
  render(){
    return(
    <TopicDetailLayout>
      <Row type="flex" justify="space-around" >
        <p style={{fontSize:24, marginBottom:24}}>My Diary</p>
      </Row>
      <Row>
        <Card>
          <Row>
            <Col span={2} offset={4}>
              <Headshot url = "https://media4.giphy.com/media/3o8doNAGKZXsrsgzW8/200_s.gif" />
            </Col>
            <Col span={16} offset={2}>
              <Editor/>
              <Row type="flex" justify="end">
                <Button>Save</Button>
                <Button>Submit</Button>
              </Row>
            </Col>
          </Row>
        </Card>
      </Row>

    </TopicDetailLayout>
    )
  }
}

export default TopicDetailPage;
