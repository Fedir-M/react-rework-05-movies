import { Outlet, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import MainLayout from './MainLayout/MainLayout';
import { BarLoader } from 'react-spinners';

// import HomePage from '../pages/HomePage/HomePage';
// import MoviesPage from '../pages/MoviesPage/MoviesPage';
// import ActorsPage from 'pages/ActorsPage/ActorsPage';
// import MovieDetails from './MovieDetails/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
// import ActorsAllMoviePage from 'pages/ActorsAllMoviePage/ActorsAllMoviePage';
// import NotFound from 'pages/NotFound/NotFound';

// import NavigationBar from './NavigationBar/NavigationBar';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const ActorsPage = lazy(() => import('pages/ActorsPage/ActorsPage'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const ActorsAllMoviePage = lazy(() =>
  import('pages/ActorsAllMoviePage/ActorsAllMoviePage')
);
const ActorProfile = lazy(() => import('./ActorProfile/ActorProfile'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

const SharedLayout = () => {
  return (
    <>
      <MainLayout />
      <Suspense fallback={<BarLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

const App = () => {
  return (
    <>
      {/* <NavigationBar /> */}

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movie_id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="actors" element={<ActorsPage />} />
          <Route
            path="/actors/:actor_id/movies"
            element={<ActorsAllMoviePage />}
          />
          <Route path="profile" element={<ActorProfile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
