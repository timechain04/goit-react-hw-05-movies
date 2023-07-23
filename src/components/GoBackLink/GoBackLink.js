import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from '../GoBackLink/GoBackLink.module.css';

export function GoBackLink() {
  const location = useLocation();
  return ( <button className={css.goBackBtn}>
    <Link className={css.GoBackLink} to={location.state?.from ?? '/Home'}>
      Go back
    </Link></button>
  );
}