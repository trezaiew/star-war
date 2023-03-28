import React from 'react';
import { useState, useEffect } from 'react';
import EnHancedFetch from '../../services/http';
import Header from '../../components/Header';
import Posts from '../../components/post';
import Pagination from '../../components/pagination';
import Error from '../../components/Error';
import { useParams, Navigate } from 'react-router-dom';
import { setItem, getItem} from '../../services/storage';
const Home = () => {

  let numberPage = 1

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(numberPage);
  const [postsPerPage] = useState(10);
  const [error, setError] = useState(false);
  const [characterId, setCharacterId] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);


  const BASE_API_URL = "https://swapi.dev/api/";

  useEffect(() => {

    const fetchPosts = async () => {
      setLoading(true);

      let data = getItem(currentPage);
      if (data) {
        setTotalPosts(data.count)
        setCharacterId(data.results[0].url.split('/')[5]
        )
        setPosts(data.results);
        setLoading(false);
        return;
      }
      try {
        const res = await EnHancedFetch(
          'GET',
          BASE_API_URL + 'people/?page=' + currentPage,
          ""
        );
        setItem(currentPage, res);
        setTotalPosts(res.count)
        setCharacterId(res.results[0].url.split('/')[5]
        )

        setPosts(res.results);
        setError(false);

      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }

    };

    fetchPosts();
  }, [currentPage]);


  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>

      <Header></Header>
      <div className='container mt-5'>

        <Posts posts={posts} loading={loading} characterId={characterId} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
          paginate={paginate}
          nextPage={nextPage}
          previousPage={previousPage}
          currentPage={currentPage}
        />
      </div>
    
    </>
  );
}


export default Home