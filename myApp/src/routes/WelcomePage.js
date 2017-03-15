/**
 * Created by tengzhongwei on 3/12/17.
 */
import React from 'react'
import ContentLayout from '../components/MainpageLayout'
import VideoPart from '../components/VideoPart'
import styles from '../less/routes/WelcomePage.less'

export default ()=>{
  return(

    <ContentLayout>
      <div className={styles.imageContainer}>
      <img src="https://s-media-cache-ak0.pinimg.com/736x/c6/ac/b7/c6acb7b55cb9d3b407ff1544164ca2a5.jpg"
          className={styles.image}/>
      </div>
    </ContentLayout>
  )
}
