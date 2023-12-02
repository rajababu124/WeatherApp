import React from 'react'
import { useParams } from 'react-router-dom'
const contact = () => {
    const {id} = useParams();
  return (
    <>
      <h1> Contact Page {id} !! </h1>
    </>
  )
}

export default contact
