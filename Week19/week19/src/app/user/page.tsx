
import React from 'react'

const getUserData = async () => {
  const res = await fetch(`http://localhost:3000/api/v1/user/details`, {
    method : "POST"
  });
  const data = await res.json();
  return data;
}

async function User() {

  const userData = await getUserData();
  console.log("Rendering User component");


  return (
    <div className='grid h-[calc(100vh-4rem)] place-content-center'>
    <div className="p-4 max-w-md mx-auto bg-white text-black rounded-xl shadow-md space-y-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">{userData?.name}</h1>
        <p className="text-gray-500">@{userData?.username}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Contact Information</h2>
        <p>Email: {userData?.email}</p>
        <p>Phone: {userData?.phone}</p>
        <p>Website: <a href={`http://${userData?.website}`} className="text-blue-500">{userData?.website}</a></p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Address</h2>
        <p>{userData?.address?.street}, {userData?.address?.suite}</p>
        <p>{userData?.address?.city}, {userData?.address?.zipcode}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Company</h2>
        <p>{userData?.company?.name}</p>
        <p>{userData?.company?.catchPhrase}</p>
      </div>
    </div>
    </div>
  )
}

export default User;
