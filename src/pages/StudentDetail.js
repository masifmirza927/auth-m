import React from 'react'
import { useParams } from 'react-router-dom'

function StudentDetail() {
  
  const params = useParams()
  const id = params.id;


  return (
    <>StudentDetail</>
  )
}

export default StudentDetail