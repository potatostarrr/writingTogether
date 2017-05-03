/**
 * Created by tengzhongwei on 4/2/17.
 */
import styles from '../../less/components/plugin/WoodBoard.less'
import {Link} from 'dva/router'
export default ({text, to})=>{
  return(
    <Link className={styles.wood} to={to}>
      <p>{text}</p>
    </Link>
  )
}
