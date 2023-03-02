import React, { useState } from 'react';

const Content = ({day, amount, percent}) => {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (active){
      setActive(!active)
    } else {
      setActive(!active)
    }
  }

  return (
    <div className='content__wrapper'>
      <div className={active ? 'upperblock active' : 'upperblock'}>
        <span className='amount'>${amount}</span>
      </div>
      <div onClick={() => handleClick()} className='content__bar' style={{minHeight: `${percent}%`}}>
        <div className={percent === 100 ? 'content__bar-progress active' : 'content__bar-progress'}></div>

        <span className='content__bar-day'>{day}</span>
      </div>
    </div>
  );
};

export default Content;