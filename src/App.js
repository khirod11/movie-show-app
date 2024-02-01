import { Routes,Route } from 'react-router-dom';
import './App.css';
import MovieList from './components/movies/MovieList';
import Navbar from './components/navbar/Navbar';
import MovieDetails from './components/movies/MovieDetails';


function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route exact path="/" element={<MovieList/>}/>
      <Route exact path="/movie-details/:id" element={<MovieDetails/>}/>
    </Routes>
    </div>
  );
}

export default App;
