import React from 'react';
import AddPromo from '../AddPromo/AddPromo';
import Updates from '../Updates/Updates';
import Button from '../Button/Button';
import './RightSide.css';

const RightSide = () => {
  return (
        <div className="RightSide">
            <div>
                <AddPromo />
                <h3>Updates</h3>
                <Updates />
                <Button />
            </div>
        </div>
    )
}

export default RightSide