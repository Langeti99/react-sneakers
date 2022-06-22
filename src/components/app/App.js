import styles from './App.module.scss';
console.log(styles);
import Card from "../card";

function App() {  
  return (
    <div className={`${styles.wrapper} clear`}>
      <div style={{display:'none'}} className="overlay">
        <div className="drawer">
          <div className="d-flex justify-between mb-30">
            <h2>Корзина</h2>
            <img className="closeBtn cu-p" src="/img/close.svg" alt="close" />
          </div>
          
          <div className="items">            
            <div className="cartItem d-flex">
              <div style={{backgroundImage: "url(/img/sneakers/1.jpg)"}} className="cartItemImg">
              </div>
              <div className="mr-25">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 333 грн.</b>
              </div>
              <img className="closeBtn" src="/img/close.svg" alt="close" />
            </div>

            <div className="cartItem d-flex">
              <div style={{backgroundImage: "url(/img/sneakers/2.jpg)"}} className="cartItemImg">
              </div>
              <div className="mr-25">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>8 333 грн.</b>
              </div>
              <img className="closeBtn" src="/img/close.svg" alt="close" />
            </div>
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Ітог:</span>
                <div></div>
                <b>12 000 грн.</b>
              </li>
              <li>
                <span>Налог</span>
                <div></div>
                <b>13 200 грн.</b>
              </li>
            </ul>
            <button className="greenButton">Оформити замовлення <img src="/img/arrow.svg" alt="arrow" /></button>
          </div>
        </div>
      </div>


      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo"/>
          <div>
            <h3>REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30"><img width={18} height={18} src="/img/card.svg" alt="icon"/><span>1200 грн.</span></li>
          <li><img width={18} height={18} src="/img/user.svg" alt="icon2"/></li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Всі кросівки</h1>
          <div className="searchBlock d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Пошук..." />
          </div>
        </div>

        <div className="mainContent d-flex justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
