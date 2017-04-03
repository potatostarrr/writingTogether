/**
 * Created by tengzhongwei on 3/19/17.
 */
import {Card} from 'antd'
import {Link} from 'dva/router'
import styles from './CardLink.less'

export default ({url, to, text,onClick})=>{

  return(
    <Link to={to} onClick={onClick}>
      <Card bodyStyle={{ padding: 0 }} className ={styles.card}>
        <img src={url} id={text} />
        <p id={text} > {text}</p>
      </Card>
    </Link>
  )
}
