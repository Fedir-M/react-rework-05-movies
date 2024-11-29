import { Route, Routes } from 'react-router-dom';

import MainLayout from './MainLayout/MainLayout';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import ActorsPage from 'pages/ActorsPage/ActorsPage';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

// import NavigationBar from './NavigationBar/NavigationBar';

const App = () => {
  return (
    <>
      {/* <NavigationBar /> */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movie_id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="actors" element={<ActorsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
