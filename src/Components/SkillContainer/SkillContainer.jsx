import React from 'react'
import{Element}  from "react-scroll"
import skillimg from "../../assets/skillset.jpeg"
import { LinearProgress } from '@mui/material';
import "./SkillContainer.css"

const SkillContainer = () => {
  return (
    <Element name="skills" className='skillContainer' >
        <div className='skillContainer__image'>
            <img src={skillimg} alt=""/>
        </div>
        <div className='skillContainer__text'>
          <h1>SKILLSET</h1>
          <div className='skillContainer__skillset'>
            <h5>Html</h5>
            <div className='skillContainer__slider skillContainer__slider1'>
<LinearProgress variant='determinate' value={90}/>
            </div>
          </div>
<div className='skillContainer__skillset'>
            <h5>CSS</h5>
            <div className='skillContainer__slider skillContainer__slider2'>
<LinearProgress variant='determinate' value={85}/>
            </div>
          </div>
<div className='skillContainer__skillset'>
            <h5>JavaScript</h5>
            <div className='skillContainer__slider skillContainer__slider3'>
<LinearProgress variant='determinate' value={80}/>
            </div>
          </div>
    <div className='skillContainer__skillset'>
            <h5>React</h5>
            <div className='skillContainer__slider skillContainer__slider4'>
<LinearProgress variant='determinate' value={75}/>
            </div>
          </div>
        </div>
        </Element>

 )
}

export default SkillContainer 