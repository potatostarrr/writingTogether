/**
 * Created by tengzhongwei on 2/24/17.
 */
/**
 * Created by tengzhongwei on 2/22/17.
 */
import React from 'react'
import styles from '../less/components/RegisterForm.less'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
import {connect} from 'dva'

const FormItem = Form.Item;
const Option = Select.Option;

class RegistrationForm extends React.Component {
  state = {
    passwordDirty: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        //console.log('Received values of form: ', values);
        this.props.dispatch({type:'try/register', payload:values})
      }
    });
  };
  handlePasswordBlur = (e) => {
    const value = e.target.value;
    this.setState({ passwordDirty: this.state.passwordDirty || !!value });
  };
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.passwordDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };
  render() {
    const { getFieldDecorator } = this.props.form;


    //settings of layout of each element
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6,
      },
    };
    return (
      <Form onSubmit={this.handleSubmit} className={styles.registerform}>
        <FormItem
          className={styles.label}
          {...formItemLayout}
          label="E-mail"
          hasFeedback
        >
          {getFieldDecorator('username', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Password"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password" onBlur={this.handlePasswordBlur} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Confirm Password"
          hasFeedback
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I had read the <a>agreement</a></Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">Register</Button>
        </FormItem>
      </Form>
    );
  }
}

//for connect redux and react(form)
const mapStateToProps = (state)=>{
  return{
    username: state.try.username,
  }
};

//for connect form and react, map props to field
const mapPropsToFields = (props)=> {
  return {
    username: {value: props.username}
  };
};

//for connect form and redux, do dispatch when field changed
const onFieldsChange =(props, changedField)=>{
};



const form = Form.create({mapPropsToFields, onFieldsChange})(RegistrationForm);
export default connect(mapStateToProps)(form)
