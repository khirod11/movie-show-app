
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieBookingForm from "./MovieBookingForm";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const openForm = () => {
    console.log("Opening form...");
    setIsFormOpen(true);
  };

  const closeForm = () => {
    console.log('Closing form...');
    setIsFormOpen(false);
  };
  const sanitizeHTML = (htmlString) => {
        return htmlString.replace(/<\/?(p|b)[^>]*>/g, "");
      };

  return (
    <div className="container mt-1 d-flex justify-content-center">
      {movieDetails && (
        <div
          className="card mb-3 col"
          style={{ width: "540px", height: "auto" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={
                  movieDetails.image
                    ? movieDetails.image.original
                    : "/images/movie_image.jpg"
                }
                className="img-fluid rounded-start  "
                alt={movieDetails.name}
              />
            </div>
            <div className="col-md-8 mt-4">
              <div className="card-body ms-3 me-3 bg-dark text-white">
                <h5 className="d-flex bg-warning-subtle">
                  <strong className="text-black ms-1">{movieDetails.name}</strong>{" "}
                </h5>
                <p className="d-flex">
                  <strong className="text-warning pe-2">Runtime:</strong>
                  {movieDetails.runtime} min
                </p>
                <p className="d-flex">
                  <strong className="text-warning pe-2">Genres:</strong> {movieDetails.genres.join(", ")}
                </p>
                <p className="d-flex">
                  <strong className="text-warning pe-2">Language:</strong> {movieDetails.language}
                </p>
                <p className="d-flex">
                    <strong className="text-warning pe-2">Imdb Rating:</strong> {movieDetails.rating.average}
                </p>
                <div className="border border-white mb-2">
                <strong className="d-flex text-warning justify-content-center">Summary :</strong>
                <p
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHTML(movieDetails.summary),
                  }}
                ></p>
                </div>
                 <button onClick={openForm} className="btn bg-success-subtle">
              Book Movie Tickets
            </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isFormOpen && <MovieBookingForm movieDetails={movieDetails} onClose={closeForm} />}
     

    </div>
  );
};

export default MovieDetails;
