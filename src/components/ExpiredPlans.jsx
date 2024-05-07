import React from 'react'
import settings from '../assets/settings.svg';
import { useNavigate } from 'react-router-dom';
const ExpiredPlans = () => {
  const navigate=useNavigate()
  return (
    <div className='h-full w-1/2 flex flex-col items-center justify-start pt-[50px]'>
      {/* {isEmpty(consuption) ? (
        <p>Loading or no data...</p>
      ) : (
        <ul>
          {Object.entries(consuption).map(([key, value]) => (
            <li key={key}>{`${key}: ${value}`}</li>
          ))}
        </ul>
      )} */}
      <img className='h-[80px] w-[80px]' src={settings}/>
      <p className='text-black text-2xl font-semibold mt-[25px]'>No Expired eSIM detected

</p>
      

    </div>
  )
}

export default ExpiredPlans