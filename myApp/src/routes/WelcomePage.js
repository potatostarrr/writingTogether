/**
 * Created by tengzhongwei on 3/12/17.
 */
import React from 'react'
import {Link} from 'dva/router'
import {Row, Col, Card} from 'antd'
import ContentLayout from '../components/MainPage/MainpageLayout'
import WoodBoard from '../components/plugin/WoodBoard'
import VideoPart from '../components/MiniLessons/VideoAndComment'
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
          <h3 className={styles.heading}>Writing Community</h3>
        </Row>

        <Row className={styles.imageContainer}>
          <Row type="flex" justify="space-around" className={styles.row}>
            <WoodBoard text="Mini Lesson" to="lessons/units"/>
            <WoodBoard text="Discussion Board" to="discussion/units"/>
          </Row>

          <Row type="flex" justify="space-around" className={styles.row}>
            <WoodBoard text="Model Writing" to="model/units"/>
            <WoodBoard text="Writing Topic" to="/topic/units"/>
          </Row>

          <Row type="flex" justify="space-around" className={styles.row}>
            <WoodBoard text="Reading" to="reading/units"/>
            <WoodBoard text="My Writing" to="my-writing/units"/>
          </Row>

          <Row type="flex" justify="space-around" className={styles.row}>
            <WoodBoard text="Writing Conference" to="conferences"/>
            <WoodBoard text="Publication" to="publication"/>
          </Row>
        </Row>
      </ContentLayout>
    )
  }
}



export default connect()(WelcomePage)
