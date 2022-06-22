import React from "react";
import Card from "../card";
import Header from "../header";
import Drawer from "../drawer";
import styles from './App.module.scss';


// const data = [
//     {"src": "/img/sneakers/1.jpg", "label": "Мужские Кроссовки Nike Blazer Mid Suede", "price": "12 999 грн."},
//     {"src": "/img/sneakers/2.jpg", "label": "Мужские Кроссовки Nike Blazer Mid Suede", "price": "8 999 грн."},
//     {"src": "/img/sneakers/3.jpg", "label": "Мужские Кроссовки Nike Blazer Mid Suede", "price": "4 999 грн."},
//     {"src": "/img/sneakers/4.jpg", "label": "Мужские Кроссовки Nike Blazer Mid Suede", "price": "8 999 грн."}
//   ]

const AppExtends = () => {  
  const [data, setData] = React.useState([]);
  const [dataCart, setDataCart] = React.useState([]);
  const [cartOpened , setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://62b3444ea36f3a973d1f0f28.mockapi.io/items')
      .then(res => res.json())
      .then(json => setData(json))
  }, [])
  
  const onAddToCart = (item) => {
    setDataCart([...dataCart, item])
    console.log(item);
    console.log(dataCart);
  }

  const elements = data.map((item) => {
    const {...itemProps} = item; 
    return <Card key={item.src} {...itemProps} onAddToCart={() => onAddToCart(item)}/>
  })


  return (
    <div className={`${styles.wrapper} clear`}>
      {cartOpened ? <Drawer dataCart={dataCart} onClose={() => setCartOpened(false)} /> : null}; 

      <Header onCartOpen={() => setCartOpened(true)} />
      <div className={`${styles.content} p-40`}>
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Всі кросівки</h1>
          <div className={`${styles.searchBlock} d-flex`}>
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Пошук..." />
          </div>
        </div>

        <div className={`${styles.mainContent} d-flex justify-between`}>
          {elements}
        </div>
      </div>
    </div>
  );
}

export default AppExtends;