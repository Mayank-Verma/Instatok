import { useEffect, useState } from "react";
import ImagePost from "../ImagePost/ImagePost";
import { fetchImagePosts } from "@/api/postService";
import ReactLoading from "react-loading";

export default function ImagePostFeed() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchImagePosts();
        const posts = response.posts;
        setData(posts);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means it runs once on mount
  // Check if data is null or if posts is not available
  // console.log("data->", data);
  // console.log("data.posts->", data.posts);
  if (!data || data.length === 0) {
    return <div>No posts available.</div>;
  }

  return (
    <div>
      {/* {data.posts.map((post, i) => (
        // <ImagePost key={post.id} postData={post} /> // Render each ImagePost
        // <h1>hi</h1>
        <ImagePost />
      ))} */}
      {loading ? (
        <ReactLoading type="spin" color="#36d7b7" height={50} width={50} />
      ) : (
        data.map((post) => <ImagePost key={post.id} postInfo={post} />)
      )}
    </div>
  );
}
