import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/movieApi';

export default function Reviews() {
  const { movieId } = useParams();
  const [rewData, setRewData] = useState(null);
  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getReviews() {
      try {
        const { data } = await getMovieReviews(movieId);

        setRewData(data.results);

      } catch (error) {
        console.log(error);
      }
    }

    getReviews();
  }, [movieId]);
  if (!rewData) {
    return;
  }
  return (
    <>
      {rewData.length > 0 ? (
        <ul>
          {rewData.map(({ id, author, content }) => {
            return (
                <li key={id}>
                <h2>Author:{author} </h2>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div
        style={{
          padding:'30px 50px',
        }}> 
            <p >We don't have any reviews for this movie.</p>
        </div>
      )}
    </>
  );
}