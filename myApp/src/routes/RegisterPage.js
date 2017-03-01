/**
 * Created by tengzhongwei on 2/22/17.
 */
/**
 * Created by tengzhongwei on 2/22/17.
 */
import React from 'react';
import BasicLayout from '../components/BasicLayout'
import  RegisterForm from '../components/RegisterForm'
import styles from './RegisterPage.less'
export default ()=>{
  return(
    <div className={styles.index}>
      <BasicLayout>
        <RegisterForm/>
      </BasicLayout>
    </div>
  )
}

