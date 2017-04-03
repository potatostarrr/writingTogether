/**
 * Created by tengzhongwei on 3/17/17.
 */

import {Form, Input, Button, Row} from 'antd'
import styles from '../less/components/WritingBox.less'
import {connect} from 'dva'

const FormItem = Form.Item;
class WritingBox extends React.Component{
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div className={styles.writingArea}>
        <div className={styles.title}>
          <p>My Topic</p>
        </div>
        <Form>
          <FormItem className={styles.writing}>
            {getFieldDecorator(
              'content',{
                rules: [{ required: true, message: 'Please Input your message' }],
              }
            )(
              <Input  type="textarea" rows={10}/>
            )}
          </FormItem>
          <Row type='flex' justify="end">
            <Button>Submit</Button>
          </Row>
        </Form>
      </div>
    )
  }
}

const form = Form.create()(WritingBox)
export default connect()(form)
