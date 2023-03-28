import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
const Posts = ({ posts, loading, characterId }) => {
  if (loading) {
    return (
      <Loading />
    );
  }


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

        </div>

      ))}
    </div>

  );
};

export default Posts;