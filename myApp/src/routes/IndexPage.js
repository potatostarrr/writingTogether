import React from 'react';
import {Link} from 'dva/router'
import BasicLayout from '../components/PreviewLayout'
import styles from '../less/routes/IndexPage.less'
import {Button} from 'antd'
import {connect} from 'dva'

function indexpage({products}){
  // <img className={styles.picture} role="presentation" src="https://static.pexels.com/photos/26206/pexels-photo.jpg" />
  return(

      <BasicLayout className={styles.index} >
        <p className={styles.large}>Writing Together</p>
        <Link to="/login"><Button className={styles.button}>Log In</Button></Link>
        <Link to="/register"><Button className={styles.button}>Sign Up</Button></Link>
       </BasicLayout>
  )
}

function mapStateToProps(state) {
  return{
    products:state.products
  }
}

export default connect(mapStateToProps)(indexpage)
