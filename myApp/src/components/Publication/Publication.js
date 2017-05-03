
/**
 * Created by tengzhongwei on 3/12/17.
 */
import { Input,Row,Col,Card,Pagination } from 'antd';
import {Link} from 'dva/router'
import styles from '../../less/components/CourseList.less'
import {connect} from 'dva'
import CardLink from '../../utils/CardLink'
import Headshot from '../plugin/Headshot'

const Search = Input.Search;
class courseList extends React.Component{

  componentWillMount(){
    this.props.dispatch({type:"try/getCourseList",payload:{}});
    this.props.dispatch({type:"try/changeCoursesPage", payload:{currentCoursesPage:1}})
  }

  mapCoursesListToDOM(){
    const {currentCommentsPage,defaultPageSize} = this.props;
    const start = (currentCommentsPage-1)*defaultPageSize;
    const courses = this.props.searchedCourses.map((course)=>{
        return(
          <CardLink url={course.preview} to={`video/${course.course_name}`} text={course.courseDescription}/>
          )
      });
    return(
      <div>
        <Row type="flex" justify="space-around" className={styles.row}>
          {courses[start]}
          {courses[start+1]}
        </Row>
        <Row type="flex" justify="space-around" className={styles.row}>
          {courses[start+2]}
          {courses[start+3]}
        </Row>
      </div>
    )
  }

  pageOnChange(page,pageSize){
    this.props.dispatch({type:'try/changeCoursesPage', payload:{currentCoursesPage:page}})
  }

  onSearchChange(e){
    const value = e.target.value;
    const courses = this.props.courses.filter((course)=>{
      return course.courseDescription.toUpperCase().includes(value.toUpperCase());
    });
    this.props.dispatch({type:"try/changeCoursesPage", payload:{currentCoursesPage:1}});
    this.props.dispatch({type:'try/searchCoursesList', payload:{courses} });
  }
  render(){
  return(
    <div>
      <Row type="flex" justify="center">
        <h3 className={styles.heading}>Publications</h3>
      </Row>

      <Row className={styles.imageContainer}>
        <Col span={4} offset={2}>
          <Card title="Authors">
            <Headshot url="https://media4.giphy.com/media/3o8doNAGKZXsrsgzW8/200_s.gif" style={{marginBottom:24}}/>

            <Headshot url="https://media4.giphy.com/media/3o8doNAGKZXsrsgzW8/200_s.gif" style={{marginBottom:24}}/>

            <Headshot url="https://media4.giphy.com/media/3o8doNAGKZXsrsgzW8/200_s.gif" style={{marginBottom:24}}/>
          </Card>
        </Col>
        <Col span={12} offset={3}>
          <Card title="1" style={{marginBottom:36, height:260}}>
            <p>Example Here</p>
          </Card>
          <Card title="2" style={{marginBottom:36, height:260}} >
            <p>Example Here</p>
          </Card>
          <Pagination defaultCurrent={1} pageSize={2} total={4}/>
        </Col>

      </Row>
    </div>)
  }
};

function mapStateToprops(state) {
    return{
      currentCommentsPage: state.try.currentCoursesPage,
      defaultPageSize:4,
      token: state.try.token,
      username: state.try.username,
      courses: state.try.coursesList,
      searchedCourses: state.try.searchedCoursesList,
    }
}

export default connect(mapStateToprops)(courseList);
