import React from 'react';
import Header from './Header';
import CourseCard from './CourseCard';

// Dummy course data
const courses = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn the basics of React, including components, state, and props.",
    price: 100,
    imageLink: "https://via.placeholder.com/150",
    published: true,
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Deep dive into JavaScript with advanced concepts like closures and async programming.",
    price: 150,
    imageLink: "https://via.placeholder.com/150",
    published: true,
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    description: "Understand the key principles of UI/UX design to enhance user experience.",
    price: 200,
    imageLink: "https://via.placeholder.com/150",
    published: true,
  },
];

const Courses = () => {
  return (
    <>
    <div className="flex flex-col items-center h-screen bg-base-200 p-0">

    <Header/>

      <h2 className="text-3xl font-bold text-neutral-content my-6">Available Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-3">
        {courses.map(course => <CourseCard key={course.id} course={course}/>)}
      </div>
    </div>
    </>
  );
};

export default Courses;
