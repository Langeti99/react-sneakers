import styles from './Header.module.scss';

const Header = (props) => {
  const {onCartOpen} = props;
   return (
      <header className={`${styles.header} d-flex justify-between align-center p-40`}>
          <div className="d-flex align-center">
            <img width={40} height={40} src="/img/logo.png" alt="logo"/>
            <div>
              <h3>REACT SNEAKERS</h3>
              <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
          </div>
          <ul className="d-flex">
            <li onClick={onCartOpen} className="mr-30 cu-p"><img width={18} height={18} src="/img/card.svg" alt="icon"/><span>1200 грн.</span></li>
            <li><img width={18} height={18} src="/img/user.svg" alt="icon2"/></li>
          </ul>
      </header>
   )
}

export default Header;