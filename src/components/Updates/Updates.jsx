import React from 'react';
import { UpdatesData } from '../../Data/Data';
import './Updates.css';

const Updates = () => {
  return (
    <div className="Updates">
        {UpdatesData.map((update)=>{
            return(
                <div className="update">
                    <img src={update.img} alt="" />
                    <div className="noti">
                        <div style={{marginBottom: '0.5rem'}}>
                            <span>{update.name}</span>
                            <br />
                            <span>{update.noti}</span>
                        </div>
                    <span>score: {update.score}</span>
                    </div>
                </div>
            );
        })}
    </div>
    )
}

export default Updates