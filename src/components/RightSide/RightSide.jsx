import React from 'react';
import Updates from '../Updates/Updates';
import Button from '../Button/Button';
import './RightSide.css';

const RightSide = () => {
  return (
        <div className="RightSide">
            <div>
                <h3>Updates</h3>
                <Updates />
                <Button />
            </div>
        </div>
    )
}

export default RightSide