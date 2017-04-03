/**
 * Created by tengzhongwei on 3/12/17.
 */
import React from 'react'
import {Link} from 'dva/router'
import {Row, Col, Card} from 'antd'
import ContentLayout from '../components/MainpageLayout'
import VideoPart from '../components/VideoPart'
import styles from '../less/routes/WelcomePage.less'
import CardLink from '../utils/CardLink'
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
      <ContentLayout>
        <Row type="flex" justify="center">
          <h3 className={styles.heading}>Online Writing Community</h3>
        </Row>
        <Row className={styles.imageContainer}>

          <Row type="flex" justify="space-around" className={styles.row}>
            <CardLink url="https://s3-us-west-2.amazonaws.com/zhongweisfierstbucket/MiniLesson.jpeg" to='courses'
                      text="Mini Lessons" onClick={this.cardOnClick.bind(this)} />
            <CardLink url="https://s3-us-west-2.amazonaws.com/zhongweisfierstbucket/WechatIMG6.jpeg" to=""
                      text="Discussion Board"/>
          </Row>

          <Row type="flex" justify="space-around" className={styles.row}>
            <CardLink url="https://s3-us-west-2.amazonaws.com/zhongweisfierstbucket/WechatIMG7.jpeg" to=""
                      text="Model Writing"/>
            <CardLink url="https://s3-us-west-2.amazonaws.com/zhongweisfierstbucket/WritingTopic.jpeg" to=""
                      text="Writing Topic"/>
          </Row>

          <Row type="flex" justify="space-around" className={styles.row}>
            <CardLink url="https://s3-us-west-2.amazonaws.com/zhongweisfierstbucket/Reading.jpeg" to=""
                      text="Reading"/>
            <CardLink url="https://s3-us-west-2.amazonaws.com/zhongweisfierstbucket/MyWriting.jpeg" to=""
                      text="My Writing"/>
          </Row>

          <Row type="flex" justify="space-around" className={styles.row}>
            <CardLink url="https://s3-us-west-2.amazonaws.com/zhongweisfierstbucket/WritingCoference.jpeg" to=""
                      text="Writing Conference"/>
            <CardLink url="https://s3-us-west-2.amazonaws.com/zhongweisfierstbucket/GroupWork.jpeg" to=""
                      text="Group Work"/>
          </Row>
        </Row>
      </ContentLayout>
    )
  }
}



export default connect()(WelcomePage)
