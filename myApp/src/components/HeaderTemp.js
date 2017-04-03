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
      <Col span={2}>
        <Link to="/">
          <img className={styles.img} src="https://www.graphicsprings.com/filestorage/stencils/e00014ed17521da3f415162fd9e6771e.png?width=500&height=500"/>
        </Link>
      </Col>
      <Col offset={17} span={5} className={styles.menu}>
        {children}
      </Col>
    </Row>
  )
}
