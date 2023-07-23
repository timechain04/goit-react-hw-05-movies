import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastDetails } from '../../services/movieApi';
import { CastList } from '../Cast/CastList';
import style from '../Cast/Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);
  const [dataId, setDataId] = useState(undefined);

  useEffect(() => {
    if (movieId === null) {
      return;
    }
    async function getCredits() {
      try {
        const { data } = await getCastDetails(movieId);

        setDataId(data.id);
        setCastData(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getCredits();
  }, [movieId]);
  return (
    <>
      {dataId !== undefined && (
        <ul className={style.CastList}>
          {castData
            .slice(0, 18)
            .map(({ id, name, character, profile_path }) => {
              return (
                <CastList
                  key={id}
                  actorName={name}
                  character={character}
                  actorPhoto={profile_path}
                />
              );
            })}
        </ul>
      )}
    </>
  );
}