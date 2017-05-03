/**
 * Created by tengzhongwei on 2/24/17.
 */
import {Row, Col} from 'antd'
import {connect} from 'dva'
import styles from '../../less/components/VideoPart.less'
import { Input,Card} from 'antd';
import Video from '../VideoBox'
import CommentsBox from '../CommentsBox'
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
          <Video courseName={'video1'}/>
        </Row>
        <Row>
          <Card>
            1. Can you give your definition of narrative writing?
            <br/>
            2. What are the six traits of narrative writing?
            <br/>
            3. After waching this video, do you know what is flashback?
          </Card>
        </Row>
        <Row type='flex' justify='center' className={styles.row}>
          <CommentsBox courseName={props.courseName}/>
        </Row>
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
