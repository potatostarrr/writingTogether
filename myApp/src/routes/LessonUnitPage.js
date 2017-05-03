/**
 * Created by tengzhongwei on 4/14/17.
 */
/**
 * Created by tengzhongwei on 3/12/17.
 */
import React from 'react'
import {Row, Col, Card} from 'antd'
import UnitLayout from '../components/MiniLessons/LessonUnitLayout'
import styles from '../less/routes/WelcomePage.less'
import {connect} from 'dva'


class WelcomePage extends React.Component{
  componentWillMount(){
    this.props.dispatch({type:'try/menuClick', payload:{selectedMenu:null,currentLocation:'Home'}});
    this.props.dispatch({type:"try/getCourseList",payload:{}});
  }

  cardOnClick(e){
    this.props.dispatch({type:'try/menuClick', payload:{selectedMenu:null,currentLocation:e.target.id}});
  }


  render() {
    return (
      <UnitLayout>
        <Row type="flex" justify="center">
          <h3 className={styles.heading}>Unit 1</h3>
        </Row>

        <Row type="flex" justify="center" style={{marginTop:120}}>
          <Card title="Instructions" bodyStyle={{backgroundColor:"white", color:"black"}}
                className={styles.board}>
            1. There are Three videos in this unit.
            <br/>

            2. Please watch these videos carefully and share your thoughts with your classmates.
            <br/>

            3. Once you watch a video and answer the question below each video, you can gain a star!
          </Card>
        </Row>
      </UnitLayout>
    )
  }
}



export default connect()(WelcomePage)
