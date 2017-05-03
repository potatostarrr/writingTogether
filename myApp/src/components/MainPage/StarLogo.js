/**
 * Created by tengzhongwei on 2/24/17.
 */
import {Icon} from 'antd'
import styles from '../../less/components/StarLogo.less'

export default ()=>{
  return(
    <span >
      <img
        src="https://s3-us-west-2.amazonaws.com/zhongweisfierstbucket/starLogo.png" className={styles.logo}/>
      <span className={styles.text}>12</span>
    </span>

  )
}
