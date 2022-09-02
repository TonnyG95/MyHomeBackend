import React, { useEffect } from 'react'

function Testing() {

  useEffect(()=>, 2) {
    console.log('This is our first use effect')
  }

  return (
    <div>testing</div>
  )
}

export default Testing