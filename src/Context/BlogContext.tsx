import React, { ReactNode, useEffect, useState, createContext } from 'react';
import { fetchBlogs, } from '../authapi/ApiService';
import { fetchUserDetails } from '../authapi/authapi';

interface Blog {
  id: number;
  image: string;
  title: string;
  content: string;
  category: string;
  author: string;
  authorphoto: string;
  tags: string[];
  publishDate: string;
  readingTime: string;
}

interface User {
  id: number;
  userName: string;
  role: string;
  // Add other fields returned by the user details API
}

interface BlogContextType {
  blogs: Blog[];
  loading: boolean;
  error: string | null;
  user: User | null;
}

export const BlogContext = createContext<BlogContextType>({
  blogs: [],
  loading: false,
  error: null,
  user: null,
});

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const blogData = await fetchBlogs();
        setBlogs(blogData);

        const userData = await fetchUserDetails();
        setUser(userData);
      } catch (err: any) {
        setError(err.message || 'Error in fetching blogs or user data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, loading, error, user }}>
      {children}
    </BlogContext.Provider>
  );
};
