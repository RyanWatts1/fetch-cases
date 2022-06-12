import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => setPost(post));
  }, [id]);

  if (!post) {
    return "Loading";
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <h1>{post.body}</h1>
    </div>
  );
}
