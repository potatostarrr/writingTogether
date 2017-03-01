import React from 'react';
import {Link} from 'dva/router'
import BasicLayout from '../components/BasicLayout'
import styles from './IndexPage.less'
import {Button} from 'antd'
export default ()=>{
  // <img className={styles.picture} role="presentation" src="https://static.pexels.com/photos/26206/pexels-photo.jpg" />

  return(
    <div className={styles.index}>
      <BasicLayout >
        <p className={styles.large}>Writing makes world better</p>
        <Link to="/login"><Button className={styles.button}>Log In</Button></Link>
        <Link to="/register"><Button className={styles.button}>Sign Up</Button></Link>
       </BasicLayout>
    </div>
  )
}
