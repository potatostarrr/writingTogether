/**
 * Created by tengzhongwei on 3/15/17.
 */
import YouTube from 'react-youtube'
import {connect} from 'dva'
import {browserHistory} from 'dva/router'
import {Row, Spin,message} from 'antd'

class Video extends React.Component {
  componentWillMount(){
    const c = this.props.coursesList.length>0?null:this.props.dispatch({type:"try/getCourseList",payload:{}});
  }


  render() {
    const course =this.props.coursesList.filter((course)=>{
      return course.course_name == this.props.courseName;
    });

    if(this.props.coursesList.length>0&&course.length==0){
      message.error("Bad Request. Course Doesn't Exist");
      browserHistory.push('/courses');
    }


    const opts = {
      height: '300',
      width: '450',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <Row>
        {
          this.props.coursesList.length>0?
            course.length>0?
              <YouTube
                videoId={course[0].videoId}
                opts={opts}
                onReady={this._onReady}
              />
            :
            <p>Course Doesn't Exist!</p>
            :<p><Spin/>Loading...</p>
        }

      </Row>

    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

const mapStateToProps = (state)=>{

  return(
    {coursesList:state.try.coursesList}
  );
};


export default connect(mapStateToProps)(Video)
