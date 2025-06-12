//const basi_api = "https://blogspotapibackend-2.onrender.com/api";
const base_api="https://localhost:7018/api";

const getAuthHeader = (): HeadersInit => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const fetchBlogs = async () => {
  try {
    const response = await fetch(`${base_api}/Posts/allposts`);
    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }
    const data = await response.json();
    console.log("api response from apiservice component", data);
    return data; 
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error; 
  }
};
export const fetchUserPosts = async () => {
  const res = await fetch(`${base_api}/Posts/getPostbyUserId`, {
    headers: getAuthHeader(),
  });
  if (!res.ok) throw new Error("Failed to fetch user posts");
  return await res.json();
};

export const deletePost = async (id: number) => {
  const res = await fetch(`${base_api}/Posts/DeletePost?id=${id}`, {
    method: "DELETE",
    headers: getAuthHeader(),
  });
  if (!res.ok) throw new Error("Failed to delete post");
  return await res.json();
};




 const createPost = async (postData: FormData) => {
  const token = localStorage.getItem("token");

  const headers: HeadersInit = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${base_api}/Posts/CreatePost`, {
    method: "POST",
    headers,
    body: postData, // Don't set 'Content-Type' when sending FormData
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to create post: ${errorText}`);
  }

  return await res.json();
};


export {
  fetchBlogs,
  createPost
};
