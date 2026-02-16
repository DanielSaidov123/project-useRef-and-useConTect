import { useEffect, useState } from "react";

export const Posts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadData() {
    try {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();
      setData(result.slice(0, 10));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2>Posts</h2>

      {loading && <p>Loading...</p>}

      {!loading &&
        data.map((post) => (
          <div key={post.id} className="postdiv">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};
