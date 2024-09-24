import React from 'react';

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
    <div className="flex flex-col items-center justify-center h-screen bg-base-200 p-4">
      <h2 className="text-3xl font-bold text-neutral-content mb-6">Available Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="card bg-base-100 shadow-lg">
            <figure>
              <img src={course.imageLink} alt={course.title} className="w-full h-40 object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="text-xl font-bold text-neutral-content">{course.title}</h3>
              <p className="text-neutral-content">{course.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold text-primary">Price: ${course.price}</span>
                <button className="btn btn-primary">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
