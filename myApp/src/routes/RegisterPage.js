/**
 * Created by tengzhongwei on 2/22/17.
 */
/**
 * Created by tengzhongwei on 2/22/17.
 */
import React from 'react';
import BasicLayout from '../components/BeforeLogin/LoginLayout'
import  RegisterForm from '../components/BeforeLogin/RegisterForm'
import styles from '../less/routes/RegisterPage.less'
export default ()=>{
  return(
      <BasicLayout>
        <RegisterForm className={styles.registerform}/>
      </BasicLayout>
  )
}

