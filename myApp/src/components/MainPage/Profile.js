/**
 * Created by tengzhongwei on 3/20/17.
 */

import {Row,Col, Card} from 'antd'
import {connect} from 'dva'
import styles from '../../less/components/Profile.less'

class Profile extends React.Component{
  componentWillMount(){
    this.props.dispatch({type:'try/getProfile',payload:{}});
  }

  render(){
    return(
          <Card bordered={false} title="Personal Information" className={styles.card}>
              <p><b>Username:</b><span>{this.props.profile.username}</span></p>
              <p><b>First Name:</b><span>{this.props.profile.first_name}</span></p>
              <p><b>Last Name:</b><span>{this.props.profile.last_name}</span></p>
              <p><b>City:</b><span>{this.props.profile.city}</span></p>
              <p><b>Stars:</b><span>{this.props.profile.stars}</span></p>
          </Card>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    profile: state.try.profile,
  }
};


export default connect(mapStateToProps)(Profile)
