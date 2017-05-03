/**
 * Created by tengzhongwei on 5/1/17.
 */
import TopicDetailLayout from '../components/MyWriting/MyWritingDetailLayout'
import Headshot from '../components/plugin/Headshot'
import {Row,Card,Col,Button} from 'antd'
import Editor from '../components/plugin/EditorPage'

class MyWritingDetailPage extends React.Component{
  state = {};
  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }
  render(){
    return(
    <TopicDetailLayout>
      <Row type="flex" justify="space-around" >
        <p style={{fontSize:24, marginBottom:24}}>My Writing</p>
      </Row>
      <Row>
        <Card>
          <Row>
            <Col span={2} offset={4}>
              <Headshot url = "https://media4.giphy.com/media/3o8doNAGKZXsrsgzW8/200_s.gif" />
            </Col>
            <Col span={16} offset={2}>
              <Card style={{height:500}}>
                <h2>This is Instruction</h2>
              </Card>
            </Col>
          </Row>
        </Card>
      </Row>
      <Row type="flex" justify="space-around" style={{marginTop:56}}>
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



    </TopicDetailLayout>
    )
  }
}

export default MyWritingDetailPage;
