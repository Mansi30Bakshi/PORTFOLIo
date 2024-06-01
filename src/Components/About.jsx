import React from 'react'
import mansi from '../assets/Mansi.jpeg'

const About = () => {
  
  return (
    <>
    <div className='text-white'style={{ backgroundImage: "url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
    <h1 className='text-center font-semibold text-7xl mt-7'>ABOUT ME</h1>
    <p className='text-center font-mono text-1xl mt-7'>Here, you will find more information about me, my work, and my current skills, <br></br>
    primarily in programming and technology.</p>
    <div className="flex flex-row items-center mt-10">
  <p className="flex-1 mr-4 text-lg font-thin ml-10 text-justify">

Hello! I'm Mansi Bakshi, a passionate B.Tech student majoring in Computer Science at Jaypee Institute of Information Technology, Noida. With a strong penchant for innovation and problem-solving, I specialize in full-stack web development. Proficient in HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB, I enjoy crafting dynamic and user-centric applications. My expertise extends to C++ and data structures, laying a solid foundation for building robust and efficient solutions. Through diverse projects, I've honed my skills in integrating front-end and back-end technologies seamlessly, delivering engaging and functional web experiences. My commitment to staying abreast of evolving industry trends and technologies drives me to pursue continuous learning. I thrive on challenges, leveraging technology to tackle real-world problems creatively and striving to make a meaningful impact through my work.
  </p>
  <div class="flex-1 flex justify-center">
    <img src={mansi} alt="Mansi Bakshi" className='h-64  object-contain rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-[10%] border-solid-5'/>
  </div>
</div>
<p className='ml-10'>- Mansi Bakshi</p>
</div>
    </>
  )
}

export default About