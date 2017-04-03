/**
 * Created by tengzhongwei on 3/17/17.
 */
import { Card, Col, Row } from 'antd';
import styles from '../less/components/WritingShare.less'


export default class WritingShare extends React.Component{
  render(){
    return(
      <div style={{ background: '#ECECEC' }}>
        <Row gutter={24} className={styles.row}>

          <Col span="8">
            <Card title="Card title" bordered={false}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>

          <Col span="8">
            <Card title="Card title" bordered={false}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span="8">
            <Card title="Card title" bordered={false}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
        <Row gutter={24} className={styles.row}>
          <Col span="8">
            <Card title="Card title" bordered={false}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span="8">
            <Card title="Card title" bordered={false}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span="8">
            <Card title="Card title" bordered={false}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
