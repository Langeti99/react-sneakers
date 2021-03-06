import styles from './Header.module.scss';
import {Link} from 'react-router-dom';

const Header = (props) => {
  const {onCartOpen} = props;
   return (
      <header className={`${styles.header} d-flex justify-between align-center p-40`}>
          <Link to="/">
            <div className="d-flex align-center">
              <img width={40} height={40} src="/img/logo.png" alt="logo"/>
              <div>
                <h3>REACT SNEAKERS</h3>
                <p className="opacity-5">Магазин лучших кроссовок</p>
              </div>
            </div>
          </Link>
          <ul className="d-flex">
            <li onClick={onCartOpen} className="mr-30 cu-p"><img width={18} height={18} src="/img/card.svg" alt="icon"/><span>1200 грн.</span></li>
            <Link to="/favorite">
              <li><img width={18} height={18} src="/img/favorite.svg" alt="icon3"/></li>
            </Link>
            <li><img width={18} height={18} src="/img/user.svg" alt="icon2"/></li>
          </ul>
      </header>
   )
}

export default Header;