import React, { useEffect, useState } from 'react';
import logo from './../assets/logo.svg';
import Content from './Content';

const Diagram = () => {
  const data = require('./../data.json')
  const [values, setValue] = useState([])
  useEffect(() => {
    for(let i = 0; i < data.length; i++) {
      const amounts = data.map(item => item.amount)
      setValue(amounts)
    }
  }, [data])

  const largeNum = Math.max(...values);
  const percentage = values.map((num) => (num / largeNum) * 100)
  
  return (
    <section className='section'>
      <div className='balancebar'>
          <div className='balancebar__left'>
            <span className='balancebar__balance-title'>My balance</span>
            <span className='balancebar__balance'>$921.48</span>
          </div>
          <img src={logo} alt="" />
        </div>
        <div className='diagram'>
          <span className='diagram__title'>Spending - Last 7 days</span>
          <div className='content'>
            {data.map((item, index) => 
              <Content key={index} day={item.day} amount={item.amount} percent={percentage[index]}/>
            )}
          </div>
          <div className='diagram__down'>
            <div className='diagram__down-left'>
              <span className='diagram__total-title'>Total this month</span>
              <span className='diagram__total-money'>$478.33</span>
            </div>
            <div className='diagram__down-right'>
              <span className='diagram__percent-title'>+2.4%</span>
              <span className='diagram__lastmonth'>from last month</span>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Diagram;