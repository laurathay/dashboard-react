import React, { useState } from 'react'
import './Card.css';

import { AnimateSharedLayout } from 'framer-motion'

const Card = (props) => {

    const [expanded, setExpanded] = useState(false)

  return (
   <AnimateSharedLayout>
       {
           expanded? (
               'Expanded'
           ):
           <CompactCard param = {props}/>
       }

   </ AnimateSharedLayout>

  )
}


//CompactCard
function CompactCard({param}) {
    const png = param.png;
    return(
        <div className="CompactCard">
            <div className="radialBar">
                Chart
            </div>
            <div className="detail">
                {/* <Png /> */}
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </div>
    )
}
export default Card