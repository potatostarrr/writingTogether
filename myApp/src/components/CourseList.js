/**
 * Created by tengzhongwei on 3/12/17.
 */
import { Input,Row,Col, Pagination } from 'antd';
import {Link} from 'dva/router'
const Search = Input.Search;
import styles from '../less/components/CourseList.less'
import {connect} from 'dva'

class courseList extends React.Component{

  componentWillMount(){
    this.props.dispatch({type:"try/getCourseList",payload:{token: this.props.token, username:this.props.username}});
  }

  mapCoursesListToDOM(courses){
    return courses.map((course)=>{
      return(
        <div key={course.courseName}>
          <img src={course.preview}/>
          <p className={styles.coursename}>{course.courseDescription}</p>
        </div>)
    })
  };

  render(){
    if(this.props.courses){console.log(this.props.courses[3])};
  return(
      <div>
        <Row>
          <Col span={18}>
            <Row type="flex" justify="space-around" className={styles.search}>
              <Search
                placeholder="input search text"
                style={{ width: 200 }}
                onSearch={value => console.log(value)}
              />
            </Row>
            <Row type="flex" justify="space-around" className={styles.row}>
              {this.props.courses?this.props.courses[0]:null}
              {this.props.courses?this.props.courses[1]:null}
            </Row>
            <Row type="flex" justify="space-around" className={styles.row}>
              {this.props.courses?this.props.courses[2]:null}
              {this.props.courses?this.props.courses[3]:null}
            </Row>
            <Row type="flex" justify="space-around">
              <Pagination  total={500}/>
            </Row>
          </Col>
          <Col>
            <p>Course Lists</p>
          </Col>
        </Row>
      </div>)
  }
};

function mapStateToprops(state) {

    return{
      token: state.try.token,
      username: state.try.username,
      //coursesList:state.try.coursesList,
      courses: state.try.coursesList?state.try.coursesList.map((course)=>{
        return(
          <div key={course.courseName}>
            <Link to="/video"><img src={course.preview}/></Link>
            <p className={styles.coursename}>{course.courseDescription}</p>
          </div>)
      }):null
    }
}

export default connect(mapStateToprops)(courseList);
