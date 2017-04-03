/**
 * Created by tengzhongwei on 2/24/17.
 */
/**
 * Created by tengzhongwei on 2/22/17.
 */
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from '../less/components/LoginForm.less'
import React from 'react'
import {connect} from 'dva'
import {Link} from 'dva/router'
import {browserHistory} from 'dva/router'
const FormItem = Form.Item;




class Content extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({type:'try/login',payload:values})
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles.loginform}>
        <FormItem className={styles.input}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="Username(use example@gmail.com for preview)" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password(12345678)" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className={styles.loginformforgot}>Forgot password</a>
          <Button type="primary" htmlType="submit" className={styles.loginformbutton}>
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
        </FormItem>
      </Form>
    );
  }
}

function onFieldsChange(props, changedFields) {
  if( changedFields.username){
    props.dispatch({type:'try/username', payload:changedFields.username.value});
  }
}


function mapPropsToFields(props) {
  return {
    username: {
      value: props.username,
    }
  };
}

//const f = Form.create({onFieldsChange,mapPropsToFields})(Content);

const f = Form.create()(Content);



function mapStateToProps(state) {
  return{
    username: state.try.username,
    token: state.try.token,
  }
}

function changeUsername(username) {
  return{
    type:'username',
    payload:username.value
  }
}


export default connect(mapStateToProps)(f);


