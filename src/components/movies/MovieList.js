import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setMovieList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container bg-secondary-subtle">
      <h1 className="align-items-center"><strong>MOVIES LIST</strong></h1>
      <div className='container d-flex flex-wrap justify-content-center '>
      {movieList.map((show) => (
        <div key={show.show.id} className="card bg-black" style={{ width: 'auto', margin: '10px' }}>
          <img
            src={show.show.image ? show.show.image.medium : process.env.PUBLIC_URL + '/images/movie_image.jpg' }
            className="card-img-top"
            alt={show.show.name}
            style={{ width: '18rem', height: '60%' }}
          />
          <div className="card-body">
            <h4 className="card-title"><strong className='text-warning'>{show.show.name}</strong></h4>
                <p className="card-text text-white">
                   {show.show.genres.join(', ')}
                </p>
            <Link to={`/movie-details/${show.show.id}`} className="btn bg-success-subtle">
              Movie Details
            </Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
