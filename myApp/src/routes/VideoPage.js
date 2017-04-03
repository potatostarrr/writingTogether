/**
 * Created by tengzhongwei on 2/22/17.
 */
import React from 'react'
import ContentLayout from '../components/MainpageLayout'
import VideoPart from '../components/VideoPart'
export default (props)=>{
  return(
      <ContentLayout>
        <VideoPart courseName={props.params.courseName}/>
      </ContentLayout>
  )
}
