/**
 * Created by tengzhongwei on 2/24/17.
 */
import {Row, Col} from 'antd'
import PopDialog from './PopDialog'
import styles from './VideoPart.less'
import { Input,Tag,Button } from 'antd';

export default ()=>{
  return(
    <div>
      <Row type='flex' justify='center' className={styles.row}>
        <PopDialog/>
      </Row>
      <Row type='flex' justify='center' className={styles.row}>
        <img className={styles.picture} role="presentation" src="https://static.pexels.com/photos/26206/pexels-photo.jpg" />
      </Row>
      <Row type="flex"  align="bottom">
        <Col offset={2} className={styles.row}>
          <Tag color="blue">What have you learned from lesson?</Tag>
          <Input type="textarea" rows={5} />
        </Col>
        <Col>
          <Button>Post</Button>
        </Col>
      </Row>
    </div>
  )
}
