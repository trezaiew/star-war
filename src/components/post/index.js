import React from 'react';
import { Link } from 'react-router-dom';
const Posts = ({ posts, loading,characterId }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }


  // let id= url.split("/")[5].at(-2);

  return (
    <div className='container '>
      {posts.map(post => (
        <div key={characterId++} className='d-flex justify-content-center'>
          <div className="card  text-center m-2"
            style={{ width: '18rem' }}>
            <div className="card-body ">
              <h5 className="card-title"> {post.name}</h5>
              <p className="card-text">gender : {post.gender}</p>
              <p className="card-text"> height : {post.height}</p>
             <Link to={`/character/${characterId}`} className="btn btn-primary">Read More</Link>
            </div>
          </div>
          {/* <Link to={`/character/${post.name}`}>Read More</Link> */}
        </div>

      ))}
    </div>

  );
};

export default Posts;