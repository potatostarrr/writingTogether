/**
 * Created by tengzhongwei on 3/15/17.
 */
import { Card, Row, Tag, Input, Button, Form, Pagination, Spin} from 'antd';
import { connect } from 'dva'
import styles from '../less/components/CommentBox.less'
const FormItem = Form.Item;

class CommentsBox extends React.Component{


  handleSubmit = (e)=>{
    e.preventDefault();
    const {courseName} = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({type:'try/postComment',payload:{...values, courseName}})
      }
    });
  };

  getComments(){
    const {courseName} = this.props;
    this.props.dispatch({type:'try/getComments',payload:{courseName}})
  }

  componentWillMount(){
    //this.getComments();
   // this.props.dispatch({type:'changeCommentsPage', payload:{currentCommentsPage:1}})
  }

  mapCommentsToDOM(){
    const {defaultPageSize, currentCommentsPage} = this.props;
    const start = defaultPageSize*(currentCommentsPage-1);
    const end = defaultPageSize*currentCommentsPage;

    return this.props.comments.slice(start, end).map((comment)=>{
      return(
        <Row type='flex' justify='center' key={Math.random()}>
          <Card className={styles.comment}>
            <p>{comment.username}</p>
            <br/>
            <p>{comment.content}</p>
            <p style={{textAlign:"right"}}> Posted by {comment.post_time}</p>
          </Card>
        </Row>
      )
    })
  }

  pageOnChange(page,pageSize){
    this.props.dispatch({type:'try/changeCommentsPage', payload:{currentCommentsPage:page}})
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    const { hint } = this.props;

    return(
        <Card title="Comments" bordered={false} className={styles.box}>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Tag color="blue">{hint?hint:"What have you learned from lesson?"}</Tag>
              {getFieldDecorator('content', {
                rules: [{ required: true, message: 'Post can not be Null' }],
              })(
                <Input type="textarea" rows={5}/>
              )}
            </Row>
            <Row type='flex' justify='end'>
              <Button htmlType="submit" type="primary">Comment</Button>
            </Row>
          </Form>
          {this.props.comments?
            this.props.comments.length>0?
              this.mapCommentsToDOM()
              :<p>Nothing in there, comment now</p>
            :<div>Loading...<Spin/></div>}
          {this.props.comments?
            <Pagination total={this.props.comments.length} defaultPageSize={this.props.defaultPageSize}
                        onChange={this.pageOnChange.bind(this)}/>:null}'
        </Card>
    )
  }
}

const mapPropsToFields = (props) =>{
  return {
    content: {
      value: props.content,
    }
  };
}


const mapStateToProps = (state)=>{
  return{
    comments: state.try.comments,
    content: null,
    currentCommentsPage: state.try.currentCommentsPage,
    defaultPageSize:5,
  }
};

const form = Form.create({mapPropsToFields})(CommentsBox);

export default connect(mapStateToProps)(form)
