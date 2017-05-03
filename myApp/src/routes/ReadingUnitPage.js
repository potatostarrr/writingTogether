/**
 * Created by tengzhongwei on 4/14/17.
 */
/**
 * Created by tengzhongwei on 3/12/17.
 */
import React from 'react'
import {Row, Col, Card} from 'antd'
import UnitLayout from '../components/Reading/ReadingUnit'
import styles from '../less/routes/WelcomePage.less'
import {connect} from 'dva'




import CommentsBox from '../components/CommentsBox'

class WelcomePage extends React.Component{
  componentWillMount(){
    this.props.dispatch({type:'try/menuClick', payload:{selectedMenu:null,currentLocation:'Home'}});
    this.props.dispatch({type:"try/getCourseList",payload:{}});
  }

  cardOnClick(e){
    this.props.dispatch({type:'try/menuClick', payload:{selectedMenu:null,currentLocation:e.target.id}});
  }


  render() {
    const example = require('../assets/ReadingExample.jpeg');
    return (
      <UnitLayout>
        <Row type="flex" justify="center">
          <h3 className={styles.heading}>Unit 1</h3>
        </Row>
        {this.props.params.book == 'index'?
          <Row type="flex" justify="center" style={{marginTop: 120}}>
            <Card title="Instructions" bodyStyle={{backgroundColor: "white", color: "black"}}
                  className={styles.board}>
              1. In this unit, we have 3 stories to read.
              <br/>

              2. After reading each book, your are invited to write your thoughts. Then you can gain 2 star!
              <br/>

              3. Feel free to comment your peers' thoughts.

              <br/>

              4. When you read these stories, please pay attention the characters, plot, and other writing strategies you can learn from these stories.
            </Card>
          </Row>
          :
          <Row type="flex" justify="center">
            <Row type="flex" justify="center" >
              <img src={example} style={{width:700,height:350,marginBottom:50}}/>
            </Row>

            <CommentsBox/>
          </Row>
        }


      </UnitLayout>
    )
  }
}



export default connect()(WelcomePage)
