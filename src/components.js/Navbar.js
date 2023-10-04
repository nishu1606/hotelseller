import React from 'react'

const Navbar = ({filterItem}) => {
  return (
    <div>
      <div className='nav'>
      <div className='btn'>
      <button className='btns' onClick={()=>filterItem("New York")}>New York</button>
      <button className='btns' onClick={()=>filterItem("Mumbai")}>Mumbai</button>
      <button className='btns' onClick={()=>filterItem("Paris")}>Paris</button>
      <button className='btns' onClick={()=>filterItem("London")}>London</button>
      </div>
      

      </div>
    </div>
  )
}

export default Navbar;
