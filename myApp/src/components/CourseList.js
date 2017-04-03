/**
 * Created by tengzhongwei on 3/12/17.
 */
import { Input,Row,Col, Pagination } from 'antd';
import {Link} from 'dva/router'
import styles from '../less/components/CourseList.less'
import {connect} from 'dva'
import CardLink from '../utils/CardLink'

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
        <Row>
          <Col span={18} offset={3}>
            <Row type="flex" justify="space-around" className={styles.search}>
              <Search
                placeholder="Search"
                style={{ width: 200 }}
                onChange={this.onSearchChange.bind(this)}
              />
            </Row>
            {this.props.searchedCourses.length  > 0?
              <div>
                {this.mapCoursesListToDOM()}
                <Row type="flex" justify="space-around">
                  <Pagination  total={this.props.searchedCourses.length}
                               onChange={this.pageOnChange.bind(this)} defaultPageSize={this.props.defaultPageSize}/>
                </Row>
              </div>:
              <div className={styles.empty}>
                <p><b>Your teacher haven't upload classes yet...</b></p>
                <img src="https://s3-us-west-2.amazonaws.com/zhongweisfierstbucket/bilibili.png"/>
              </div>
              }
          </Col>
        </Row>)
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
