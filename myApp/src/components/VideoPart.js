/**
 * Created by tengzhongwei on 2/24/17.
 */
import {Row, Col} from 'antd'

import styles from '../less/components/VideoPart.less'
import { Input,Tag,Button } from 'antd';
import YouTube from 'react-youtube'
import Video from './Video'

export default ()=>{
  return(
    <div>
      <Row type='flex' justify='center' className={styles.row}>
        <Video/>
      </Row>
      <Row type="flex"  align="bottom">
        <Col offset={2} className={styles.row}>
          <Tag color="blue">What have you learned from lesson?</Tag>
          <Input type="textarea" rows={5} />
        </Col>
        <Col>
          <Button>Post</Button>
        </Col>
        <Col>
          <Button>Classroom</Button>
        </Col>
      </Row>



      <Row>
        <Col offset={2}>
          <p>Comments:</p>
          <Row type='flex' justify='start' className={styles.comment}>
            <Col span={2}>Image</Col>
            <Col>
              <p>Username    2 years ago</p>
              <p>Great</p>
              <Button>Like</Button>
            </Col>
          </Row>
        </Col>
      </Row >


    </div>
  )
}
