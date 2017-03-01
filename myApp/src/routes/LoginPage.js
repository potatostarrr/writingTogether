/**
 * Created by tengzhongwei on 2/22/17.
 */
import React from 'react';
import BasicLayout from '../components/BasicLayout'
import LoginForm from '../components/LoginForm'
import styles from  './LoginPage.less'
export default ()=>{
  return(
    <div className={styles.index}>
      <BasicLayout>
        <p className={styles.word}>Welcome Back!</p>
        <LoginForm/>
      </BasicLayout>
    </div>
  )
}

