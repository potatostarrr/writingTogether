/**
 * Created by tengzhongwei on 2/24/17.
 */
import React from 'react'
import {Link} from 'dva/router'
import {Row, Col, Icon} from 'antd'
import styles from '../less/components/HeaderTemp.less'


export default ({children})=>{
  return(
    <Row className={styles.row}>
      <Col span={2}><Link to="/"> <img className={styles.img} src="https://s-media-cache-ak0.pinimg.com/236x/85/b6/ba/85b6ba598cc309e8cf00e990a5249419.jpg"/></Link></Col>
      <Col offset={17} span={5} className={styles.menu}>
        {children}
      </Col>
    </Row>
  )
}
