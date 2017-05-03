/**
 * Created by tengzhongwei on 2/22/17.
 */
import React from 'react'
import ContentLayout from '../components/MainPage/MainpageLayout'
import VideoAndComment from '../components/MiniLessons/VideoAndComment'
import UnitLayout from '../components/MiniLessons/LessonUnitLayout'
export default (props)=>{
  return(
      <UnitLayout>
        <VideoAndComment courseName={'unit1'}/>
      </UnitLayout>
  )
}
