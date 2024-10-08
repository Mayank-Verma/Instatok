import React, { useEffect, useState } from "react";

import ImagePost from "../ImagePost/ImagePost";

export default function ImagePostFeed() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    // Read the token from localStorage
    const savedToken = localStorage.getItem("accessToken");

    if (savedToken) {
      setToken(savedToken); // Update the token in state
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/fetchPosts/images`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Set the Authorization header
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]); // Empty dependency array means it runs once on mount
  // Check if data is null or if posts is not available
  // console.log("data->", data);
  // console.log("data.posts->", data.posts);
  if (!data || !data.posts) {
    return <div>No posts available.</div>;
  }

  let posts = data.posts;

  return (
    <div>
      {/* {data.posts.map((post, i) => (
        // <ImagePost key={post.id} postData={post} /> // Render each ImagePost
        // <h1>hi</h1>
        <ImagePost />
      ))} */}
      {posts.map((post) => (
        <ImagePost key={post.id} postInfo={post} />
      ))}
    </div>
  );
}
