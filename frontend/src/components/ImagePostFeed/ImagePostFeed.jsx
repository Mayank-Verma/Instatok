import React, { useEffect, useState } from "react";

import ImagePost from "../ImagePost/ImagePost";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNmOTgwNTZjLTYyYTEtNDMxOS1hOWU3LTAxNGRlNzNkMDg5MiIsImlhdCI6MTcyNzk1OTkyMiwiZXhwIjoxNzI3OTYzNTIyfQ.wq6IHnnyWXNfS4oMR6WtgAQcFMXBt0qlx7RnZBqkynw";
export default function ImagePostFeed() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means it runs once on mount
  return (
    <div>
      {/* <ImagePost />
      <ImagePost />
      <ImagePost /> */}
    </div>
  );
}
