import React from "react";
import axios from 'axios';
import {Route , Routes} from 'react-router-dom';
import Home from '../../pages/Home';
import Favorite from "../../pages/Favorite";
import Header from "../header";
import Drawer from "../drawer";
import styles from './App.module.scss';


// const data = [
//     {"src": "/img/sneakers/1.jpg", "label": "Кроссовки Puma X Aka Boku Future Rider", "price": "12 999 грн."},
//     {"src": "/img/sneakers/2.jpg", "label": "Мужские Кроссовки Nike Blazer Mid Suede", "price": "8 999 грн."},
//     {"src": "/img/sneakers/3.jpg", "label": "Кроссовки Puma X Aka Boku Future Rider", "price": "4 999 грн."},
//     {"src": "/img/sneakers/4.jpg", "label": "Мужские Кроссовки Nike Air Max 270", "price": "8 999 грн."}
//   ]

const AppExtends = () => {  
  const [data, setData] = React.useState([]); // state для товару 
  const [dataCart, setDataCart] = React.useState([]); // State для корзини
  const [dataFavorite, setDataFavorite] = React.useState([]); // State для фаворитів
  const [searchValue, setSearchValue] = React.useState(''); // State для пошуку
  const [cartOpened , setCartOpened] = React.useState(false); // State для відображення корзини
  const [isLoading, setIsLoading] = React.useState(true);

  // Запит для карток товару та корзини
  React.useEffect(() => {
    // fetch('https://62b3444ea36f3a973d1f0f28.mockapi.io/items')
    //   .then(res => res.json())
    //   .then(json => setData(json))
    async function fetchFunction() {
      const itemsData = await axios.get('https://62b3444ea36f3a973d1f0f28.mockapi.io/items');
      const itemsCartData = await axios.get('https://62b3444ea36f3a973d1f0f28.mockapi.io/cart');
      const itemsFavoriteData = await axios.get('https://62b3444ea36f3a973d1f0f28.mockapi.io/favorites');

      setIsLoading(false);



      setDataCart( itemsCartData.data );
      setDataFavorite( itemsFavoriteData.data );
      setData( itemsData.data );
    }

    fetchFunction();
    
  }, [])
  
  // Добавлення товару в корзину
  const onAddToCart = async (obj) => {
    if(dataCart.find(item => item.id === obj.id)){
      axios.delete(`https://62b3444ea36f3a973d1f0f28.mockapi.io/cart/${obj.id}`);
      setDataCart((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      const {data} = await axios.post('https://62b3444ea36f3a973d1f0f28.mockapi.io/cart', obj);
      setDataCart(res => [...res, data]);
    }
  }

  // Выдалення товару з корзини
  const onCartDelete = (id) => {
    // const index = dataCart.findIndex(elem => elem.id === id);
    // const newArr = [...dataCart.slice(0, index) , ...dataCart.slice(index + 1)];
    setDataCart(res => res.filter(item => item.id !== id));
    axios.delete(`https://62b3444ea36f3a973d1f0f28.mockapi.io/cart/${id}`);
  }

  const onFavorite = async (item) => {
    try {
      if(dataFavorite.find(obj => obj.id === item.id)){
        axios.delete(`https://62b3444ea36f3a973d1f0f28.mockapi.io/favorites/${item.id}`);
        // setDataFavorite((res) => res.filter(obj => obj.id !== item.id));
      } else {
        const { data } = await axios.post('https://62b3444ea36f3a973d1f0f28.mockapi.io/favorites', item);
        setDataFavorite( res => [...res, data]);
      }
    } catch( error ) {
      alert("Помилка");
    }
  }

  // Зміна стану інпута пошуку
  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  }

  // Відфольтрований масив даних
  // const filteredDataPosts = () => {
  //   return data.filter((item) => item.label.toLowerCase().includes(searchValue.toLowerCase()))
  // }


  return (
    <div className={`${styles.wrapper} clear`}>
      {cartOpened ? <Drawer dataCart={dataCart} onCartDelete={onCartDelete} onClose={() => setCartOpened(false)} /> : null}; 

      <Header onCartOpen={() => setCartOpened(true)} />
      
      <Routes>
        <Route path="/favorite" exact element={
          <Favorite 
            dataFavorite={dataFavorite}
            onFavorite={onFavorite}
            onAddToCart={onAddToCart}
            />
        }></Route>
        <Route path="/" exact element={
             <Home 
              searchValue={searchValue}
              onChangeSearchValue={onChangeSearchValue}
              setSearchValue={setSearchValue}
              data={data}
              // filteredDataPosts={filteredDataPosts}
              onFavorite={onFavorite}
              onAddToCart={onAddToCart} 
              dataCart={dataCart}
              isLoading={isLoading}
             />
        }></Route>
      </Routes>

    </div>
  );
}

export default AppExtends;