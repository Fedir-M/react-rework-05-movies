const BASE_URL = 'https://api.themoviedb.org/3';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTQ0NWVhZTQwMTY5ODllMGM1ZjVmNzg5MDRhYzE0YyIsIm5iZiI6MTczMTU5OTQyNS4xMDgyNTcsInN1YiI6IjY1ZGY2NDg3Yjc2Y2JiMDE2M2Q4MzNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O8jUWu95b2bCdx3mildt7AG2oKspuZGBhdzndcu47T0',
  },
};

export async function fetchTrendingMovies() {
  const url = `${BASE_URL}/trending/movie/week?language=en-US`;

  return fetch(url, options)
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to fetch trending movies');
      }
      return res.json();
    })
    .then(data => {
      console.log('Fetched movies:', data.results);
      return data.results;
    }) // Возвращаем массив фильмов

    .catch(error => {
      console.error('Error fetching trending movies:', error);
      return null; // Возвращаем null в случае ошибки
    });
}

export async function getMoviesByQuery(query, page = 1) {
  const url = `${BASE_URL}/search/movie?query=${query}&page=${page}`;

  const result = await fetch(url, options);

  if (!result.ok) throw new Error('Fetch failed');

  return result.json();
}
