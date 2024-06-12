import React from 'react';
 // Ensure the path is correct
import Course from '../components/Course';
import Foot from '../components/Foot';
import Navbar from '../components/Navbar';

const Courses = () => {
    // console.log(List); // This should print the content of List in the console
    
    return (
        <>
            <Navbar/>
            <div className="min-h-screen ">
                <Course /> {/* Pass List as a prop to Course */}
            </div>
            <Foot/>
        </>
    );
}

export default Courses;
