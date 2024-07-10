import React from 'react'
import Slideshow from './Slideshow'
import Band from './Band'
import Tour from './Tour'
import Ticket from './Ticket'

function PageContent() {
  return (
<div className="w3-content" style={{ maxWidth: 2000, marginTop: 46 }}>

    <Slideshow/>
    <Band/>
    <Tour/>
    <Ticket/>
</div>
  )
}

export default PageContent