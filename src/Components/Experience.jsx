import React from 'react'
import { Link } from 'react-router-dom'

const Experience = () => {
  return (
    <>
   <h1 className='text-center font-semibold text-7xl mt-7'>EXPERIENCE</h1>
      <div>
       <div className='text-2xl p-7'> <strong>1. GaoTek Inc.(Remote) : </strong> Worked as a Web developer Intern from <b>`16 June,2024  to  16 September,2024`.</b></div>
       <Link to='https://www.linkedin.com/company/gao-tek-inc-/mycompany/' className='p-8 underline'> Click for Company's Linkedin</Link>
       </div>
       <div className='text-2xl p-7'> <strong>2. Octanet Services Pvt. Ltd. (Remote)  : </strong> Worked as a Web developer Intern from <b>`1 July,2024  to  1 August,2024`</b>.</div>
       <Link to='https://www.linkedin.com/company/octanetsolutions/' className='p-8 underline'> Click for Company's Linkedin</Link>
       {/* <hr> */}
       {/* </hr> */}
       {/* <div className='p-14 text-center'>More to be added...</div> */}
    </>
  )
}

export default Experience