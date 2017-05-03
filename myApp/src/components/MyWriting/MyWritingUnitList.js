
/**
 * Created by tengzhongwei on 3/12/17.
 */
import { Input,Row,Col, Pagination } from 'antd';
import {Link} from 'dva/router'
import styles from '../../less/components/CourseList.less'
import {connect} from 'dva'
import CardLink from '../../utils/CardLink'
import WoodBoard from '../plugin/WoodBoard'

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
        <h3 className={styles.heading}>My Writing</h3>
      </Row>

      <Row className={styles.imageContainer}>
        <Row type="flex" justify="space-around" className={styles.row}>
          <WoodBoard text="Unit 1" to="my-writing/units/unit1"/>
          <WoodBoard text="Unit 2"/>
        </Row>

        <Row type="flex" justify="space-around" className={styles.row}>
          <WoodBoard text="Unit 3"/>
          <WoodBoard text="Unit 4"/>
        </Row>
        <Row type="flex" justify="space-around" className={styles.row}>
          <WoodBoard text="Unit 5"/>
          <WoodBoard text="Unit 6"/>
        </Row>
        <Row type="flex" justify="space-around" className={styles.row}>
          <WoodBoard text="Unit 7"/>
          <WoodBoard text="Unit 8"/>
        </Row>
      </Row>
      <Row type="flex" justify="space-around">
        <Pagination  total={6}
                     onChange={this.pageOnChange.bind(this)} defaultPageSize={6}/>
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
