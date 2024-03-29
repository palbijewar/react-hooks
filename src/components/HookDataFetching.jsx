import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HookDataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromBtnClick, setIdFromBtnClick] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromBtnClick]);

 const handleClick = () => {
setIdFromBtnClick(id)
  }

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}  >fetch post</button>
      <ul>
        {
          post.id && <li key={post.id}>{post.title}</li>
        }
      </ul>
    </div>
  );
}

export default HookDataFetching;
