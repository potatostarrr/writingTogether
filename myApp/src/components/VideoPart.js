/**
 * Created by tengzhongwei on 2/24/17.
 */
import {Row, Col} from 'antd'
import {connect} from 'dva'
import styles from '../less/components/VideoPart.less'
import { Input,Tag,Button,Card} from 'antd';
import Video from './Video'
import CommentsBox from './CommentsBox'
const Search = Input.Search;
const VideoPart = (props)=>{
  const course = props.coursesList.filter((course)=>{return course.course_name==props.courseName});
  return(
    <Row>
      <Col span={18}>
        <Row type='flex' justify='center' className={styles.row}>
          <p className={styles.title}>{course.length>0?course[0].courseDescription:null}</p>
        </Row>

        <Row type='flex' justify='center' className={styles.row}>
          <Video courseName={props.courseName}/>
        </Row>

        <Row type='flex' justify='center' className={styles.row}>
          <CommentsBox courseName={props.courseName}/>
        </Row>
      </Col>
      <Col span={6}>
        <Search
          placeholder="Search"
          style={{ width: 200 }}
          onSearch={value => console.log(value)}
        />
        <Card bodyStyle={{ padding: 0 }} className ={styles.card} style={{ width: 240 }}>
          <img src="https://s3-us-west-2.amazonaws.com/zhongweisfierstbucket/MiniLesson.jpeg"/>
          <p>Mini Lessons</p>
        </Card>
        <Card bodyStyle={{ padding: 0 }} className ={styles.card} style={{ width: 240 }}>
          <img src="https://s3-us-west-2.amazonaws.com/zhongweisfierstbucket/MiniLesson.jpeg"/>
          <p>Mini Lessons</p>
        </Card>
        <Card bodyStyle={{ padding: 0 }} className ={styles.card} style={{ width: 240 }}>
          <img src="https://s3-us-west-2.amazonaws.com/zhongweisfierstbucket/MiniLesson.jpeg"/>
          <p>Mini Lessons</p>
        </Card>
        <Card bodyStyle={{ padding: 0 }} className ={styles.card} style={{ width: 240 }}>
          <img src="https://s3-us-west-2.amazonaws.com/zhongweisfierstbucket/MiniLesson.jpeg"/>
          <p>Mini Lessons</p>
        </Card>
      </Col>
    </Row>
  )
};

const mapStateToProps = (state)=>{
  return{
    coursesList:state.try.coursesList
  }
};

export default connect(mapStateToProps)(VideoPart)
