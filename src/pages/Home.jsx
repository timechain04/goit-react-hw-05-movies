import { fetchTrandingFilms } from '../services/movieApi';
import { useEffect, useState } from 'react';
import { MovieItem } from '../components/MovieList/MovieItem';
import { MovieList } from '../components/MovieList/MovieList';

export default function Home() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    async function showTrandingFilms() {
      try {
        const { data } = await fetchTrandingFilms();

        setMoviesData(data.results);
      } catch (error) {}
    }
    showTrandingFilms();
  }, []);
  
  return (
    <MovieList>
      <>
        <h2 style={{
          fontSize: '30px',
          marginLeft: '70px',
          color: '#8B0000',
          fontWeight: '500',
        }}>Trending today</h2>
      </>
      {moviesData.map(({ id, title }) => {
        return <MovieItem key={id} filmTitle={title} movieId={id} />;
      })}
    </MovieList>
  );
}
