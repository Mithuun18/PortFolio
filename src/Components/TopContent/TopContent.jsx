import React from 'react'
import {Link} from "react-scroll"
import "./TopContent.css"

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent__container'>
<h1>Mithuun R</h1>
<p>Analyst in Data Processing</p>
<a href = "www.google.com ">
    <button className='topContent__DownloadButton'>Download CV</button>
</a>
<Link to="projects" smooth={true} duration={500}>
    <button className='topContent__WorkButton'>My Work</button>
</Link>
        </div>

    </div>
  )
}

export default TopContent