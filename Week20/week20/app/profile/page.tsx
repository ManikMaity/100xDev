import axios from "axios";

async function Profile() {

  const response = await axios.get("/api/profile", {
    headers : {
      token : localStorage.getItem('next-jwt-token')
    }
  })

  const data = response.data;

  return (
    <div>
      <p>Name : {data.name}</p>
      <p>Email : {data.email}</p>
      <p>Image : {data.image}</p>
    </div>
  );
}

export default Profile;
