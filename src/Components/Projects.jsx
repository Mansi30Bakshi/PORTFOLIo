import React from 'react';
import collab1 from '../assets/CC!.png';
import air from '../assets/Air1.png';
import amala from '../assets/AMALA!.png';

function Projects() {
  return (
    <>
      <h1 className='text-center font-semibold text-7xl mt-7'>PROJECTS</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2 className='text-white ml-10 font-mono mt-5 text-justify'>1. CollabConnect : Developed a multi-component React application using Redux for state management. The application consists of four main components: Main, Post, Search, and Quizzie. The application utilizes Redux for state management and React Router for navigation. This project demonstrates my ability to integrate Redux with React for efficient state management and navigation handling in a real-world application.</h2>
        <img src={collab1} className='h-60 w-50 rounded-2xl ml-3' alt="CollabConnect" style={{ marginLeft: '10px' }} />

      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2 className='text-white ml-10 font-mono mt-5 text-justify'>2.AMALA(A BEAUTY BRAND):
          Developed an interactive cosmetic brand website, AMALA, using HTML,
          CSS, and JavaScript. The site features a custom cursor, animations, and
          parallax scrolling effects for an engaging user experience. Currently, I'm
          expanding the website by integrating a backend using Node.js and
          Express. This project showcases my ability to create a visually appealing
          and dynamic website using various web technologies, and my growing
          proficiency in backend development.</h2>
        <img src={amala} className='h-60 w-50 rounded-2xl ml-3 object-center mt-3' alt="CollabConnect" />

      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2 className='text-white ml-10 font-mono mt-5 text-justify'>3.SkyBNB(A look-a-like of AIRBNB):
          In my project, SkyBnB, I'm creating an Airbnb website clone using React.js and Tailwind CSS. With React.js, I'm ensuring dynamic user interactions and smooth state management, enhancing the user experience. Tailwind CSS is helping me maintain a consistent and visually appealing design across the site while allowing for quick customization. By leveraging React.js's component-based architecture, I'm ensuring scalability and maintainability, making it easier for me to update and add new features. SkyBnB isn't just a replication of Airbnb's features; it's a platform for me to innovate and customize in the vacation rental market.


        </h2>
        <img src={air} className='h-60 w-50 rounded-2xl ml-3 object-center mt-3' alt="AIrbnb" />

      </div>


    </>
  );
}

export default Projects