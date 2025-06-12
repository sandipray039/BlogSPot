import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import UserPosts from "./UserPosts";
import CreatePost from "./CreatePost";  // Import CreatePost component
import { fetchUserPosts,} from "../authapi/ApiService";
import { fetchUserDetails } from "../authapi/authapi";

interface Post {
  id: number;
  title: string;
  description: string;
  author: string;
  image?: string;
  authorphoto?: string;
  publishDate: string;
  category:string;
}

const Dashboard = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [ispostformOpen,setIspostformOpen]=useState<true|false>(false);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const userPosts = await fetchUserPosts();
      setPosts(userPosts);
      setError(null);
    } catch (err) {
      setError("Failed to load posts. Please login.");
    } finally {
      setLoading(false);
    }
  };

  const loadUserDetails = async () => {
    try {
      const userDetails = await fetchUserDetails();
      setUsername(userDetails.userName);
    } catch (err) {
      console.error("Failed to fetch user details", err);
    }
  };

  useEffect(() => {
    loadPosts();
    loadUserDetails();
  }, []);

  const handlePostCreated = () => {
    loadPosts();
    setIspostformOpen(false); 
  };

  // The callback passed to Sidebar
  const handleCreatePostClick = () => {
    setShowCreatePost(true);
  };
  const openPostform=()=>{
    setIspostformOpen(true);
  }

  return (
    <div className="container">
      <div className="row" style={{ minHeight: "80vh" }}>
        {/* <Sidebar onCreatePostClick={handleCreatePostClick} /> */}

        <div className="col-md-12 d-flex flex-column justify-content-start mt-5">
          <div
            className="d-flex justify-content-start align-items-center gap-3 w-100"
            style={{ height: "10vh", borderBottom: "2px", borderStyle: "dashed" }}
          >
            <img
              style={{ height: "10vh", width: "7vw", borderRadius: "50%" }}
              src="images/human.webp"
              alt="profile"
            />
            <h2>{username || "Username"}</h2>
            </div>
<div className="w-100 text-end mt-3">
  {!ispostformOpen ? (
    <button
      className="btn btn-success"
      onClick={() => setIspostformOpen(true)}
    >
      Create a Post
    </button>
  ) : (
    <button
      className="btn btn-danger"
      onClick={() => setIspostformOpen(false)}
    >
      Cancel
    </button>
  )}
</div>


          <div className="mt-4 w-100">
            <h2
              style={{
                color: "green",
                fontSize: "3vw",
                fontWeight: "600",
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
            <div style={{fontSize:'8vh'}}>  {showCreatePost  ? "Create New Post" : "Your Posts"} </div>
            </h2>
 {ispostformOpen ? (
              <CreatePost onPostCreated={handlePostCreated} />
            ):loading ? (
              <p className="text-center">Loading posts...</p>
            ) : error ? (
              <p className="text-danger text-center">{error}</p>
            ) : posts.length === 0 ? (
              <p className="text-danger text-center">There is nothing to show now</p>
            ) : (
              <UserPosts posts={posts} onPostDeleted={loadPosts} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
