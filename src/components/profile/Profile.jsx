// import  { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import '../Profile/profile.css'; 

// const Profile = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: currentUser?.username || '',
//     email: currentUser?.email || '',
//     password: '',
//     profileImage: currentUser.profilepicture,
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setFormData({ ...formData, profileImage: imageUrl });
//     }
//   };

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     console.log('Update clicked:', formData);
//     alert('Profile updated (this is a dummy alert)');
//   };

//   const handleDelete = () => {
//     console.log('Delete clicked');
//     alert('Account deleted (this is a dummy alert)');
//     navigate('/login');
//   };

//   const handleSignOut = () => {
//     console.log('Sign out clicked');
//     alert('Signed out (this is a dummy alert)');
//     navigate('/login');
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         <img 
//           src={formData.profileImage} 
//           alt="Profile"
//           className="profile-image"
//         />
//         <h2>My Profile</h2>

//         <form className="profile-form" onSubmit={handleUpdate}>
//           <label>Username</label>
//           <input 
//             type="text" 
//             name="username" 
//             value={formData.username} 
//             onChange={handleChange}
//             required 
//           />

//           <label>Email</label>
//           <input 
//             type="email" 
//             name="email" 
//             value={formData.email} 
//             onChange={handleChange}
//             required 
//           />

//           <label>Password</label>
//           <input 
//             type="password" 
//             name="password" 
//             value={formData.password} 
//             onChange={handleChange}
//             placeholder="Enter new password"
//           />

//           <label>Profile Image</label>
//           <input 
//             type="file" 
//             name="profileImage" 
//             accept="image/*"
//             onChange={handleImageChange}
//           />

//           <button type="submit" className="update-btn">Update</button>
//         </form>

//         <div className="profile-actions">
//           <span className="delete-account" onClick={handleDelete}>Delete Account</span>
//           <span className="signout" onClick={handleSignOut}>Sign Out</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../Profile/profile.css';

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: currentUser?.username || '',
    email: currentUser?.email || '',
    password: '',
    profileImage: currentUser.profileImage || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, profileImage: imageUrl });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('username', formData.username);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      if (formData.profileImage instanceof File) {
        formDataToSend.append('profileImage', formData.profileImage);
      }

      const response = await axios.put('/api/user/updateProfile', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      dispatch({ type: 'UPDATE_USER', payload: response.data });
      alert('Profile updated!');
    } catch (error) {
      console.error(error);
      alert('Error updating profile');
    }
  };

  const handleDelete = () => {
    console.log('Delete clicked');
    alert('Account deleted (this is a dummy alert)');
    navigate('/login');
  };

  const handleSignOut = () => {
    console.log('Sign out clicked');
    alert('Signed out (this is a dummy alert)');
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src={formData.profileImage || ""} 
          alt="Profile"
          className="profile-image"
        />
        <h2>My Profile</h2>

        <form className="profile-form" onSubmit={handleUpdate}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter new password"
          />

          <label>Profile Image</label>
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleImageChange}
          />

          <button type="submit" className="update-btn">Update</button>
        </form>

        <div className="profile-actions">
          <span className="delete-account" onClick={handleDelete}>Delete Account</span>
          <span className="signout" onClick={handleSignOut}>Sign Out</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
