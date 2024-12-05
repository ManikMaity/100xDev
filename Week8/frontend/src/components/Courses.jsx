/* eslint-disable react/prop-types */
import React from "react";
import CourseCard from "./CourseCard";

const Courses = ({ coursesData = [] }) => {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-base-200 p-0">
        <h2 className="text-3xl font-bold text-neutral-content my-6">
          {coursesData ? "Available Courses" : "No Courses"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-3">
          {coursesData.map((course) => {
            if (course.published) {
              return <CourseCard key={course._id} course={course} />;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
