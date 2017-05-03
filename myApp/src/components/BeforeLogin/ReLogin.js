/**
 * Created by tengzhongwei on 3/17/17.
 */

import {browserHistory} from 'dva/router'
export default class ReLogin extends React.Component{

  componentDidMount(){
    setTimeout(()=> {
      browserHistory.push('/')
    }, 1000)
  }

  render(){
    return(
      <div>
        <p>Login Expired, Please Login Again</p>
      </div>
    )
  }

}
