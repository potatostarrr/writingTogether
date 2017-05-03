/**
 * Created by tengzhongwei on 2/22/17.
 */
import React from 'react';
import BasicLayout from '../components/BeforeLogin/LoginLayout'
import LoginForm from '../components/BeforeLogin/LoginForm'
import styles from  '../less/routes/LoginPage.less'
export default ()=>{
  return(
      <BasicLayout>
        <p className={styles.word}>Welcome Back!</p>
        <LoginForm/>
      </BasicLayout>
  )
}

