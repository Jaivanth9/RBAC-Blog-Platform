import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './common/Navbar';
import Footer from './common/Footer';

import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import UserProfile from './components/UserProfile';

import CreatePost from './blog/CreatePost';
import AllPosts from './blog/AllPosts';
import SinglePost from './blog/SinglePost';
import EditPost from './blog/EditPost';

import PublicRoute from './auth/PublicRoute';
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';

// const App = () => {
//   return (
//     <div className="app-container">
//       <Navbar />
//       <div className="container my-4 app-content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route element={<PublicRoute />}>
//             <Route path="/signin" element={<Signin />} />
//             <Route path="/signup" element={<Signup />} />
//           </Route>
//           <Route element={<PrivateRoute />}>
//             <Route path="/profile" element={<UserProfile />} />
//             <Route path="/posts" element={<AllPosts />} />
//             <Route path="/post/:id" element={<SinglePost />} />
//           </Route>
//           <Route element={<PrivateRoute allowedRoles={['user']} />}>
//             <Route path="/user/dashboard" element={<UserDashboard />} />
//           </Route>
//           <Route element={<AdminRoute />}>
//             <Route path="/admin/dashboard" element={<AdminDashboard />} />
//             <Route path="/create" element={<CreatePost />} />
//             <Route path="/edit/:id" element={<EditPost />} />
//           </Route>
          
//         </Routes>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// import { Routes, Route } from "react-router-dom";
// import Signup from "./components/Signup";

function App() {
  return (
        <div className="app-container">
          <Navbar />
          <div className="container my-4 app-content">
    <Routes>
      <Route path="/" element={<Home />} />
       <Route element={<PublicRoute />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<PrivateRoute />}>
             <Route path="/profile" element={<UserProfile />} />
             <Route path="/posts" element={<AllPosts />} />
             <Route path="/post/:id" element={<SinglePost />} />
           </Route>
           <Route element={<PrivateRoute allowedRoles={['user']} />}>
             <Route path="/user/dashboard" element={<UserDashboard />} />
           </Route>
           <Route element={<AdminRoute />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
             <Route path="/create" element={<CreatePost />} />
             <Route path="/edit/:id" element={<EditPost />} />
           </Route>
    </Routes>
    </div>
     <Footer />
  </div>
  );
}
export default App;