import styles from '../components/app/App.module.scss';
import Card from '../components/card';

const Home = ({ searchValue,
   onChangeSearchValue,
   setSearchValue,
   // filteredDataPosts,
   data,
   onFavorite,
   onAddToCart,
   dataCart,
   isLoading }) => {

   const renderItems = () => {
      const filteredPosts = data.filter((item) => item.label.toLowerCase().includes(searchValue.toLowerCase()));
      // return (isLoading ? [...Array(10)] : filteredPosts)
      return (isLoading ? [...Array(8).fill(<Card loading={isLoading} />)] : filteredPosts)
         .map((item) => {
            console.log(item);
            // const { ...itemProps } = item;
            return <Card
               key={item.src}
               // {...itemProps}
               price={item.price}
               src={item.src}
               label={item.label}
               onFavorite={() => onFavorite((item))}
               onAddToCart={() => onAddToCart(item)}
               added={dataCart.some(el => el.id === item.id)}
               loading={isLoading} />
         })
   }

   // const elements = data.filter((item) => item.label.toLowerCase().includes(searchValue.toLowerCase())).map((item) => {
   //    const { ...itemProps } = item;
   //    return <Card
   //       key={item.src}
   //       {...itemProps}
   //       onFavorite={() => onFavorite((item))}
   //       onAddToCart={() => onAddToCart(item)}
   //       added={dataCart.some(el => el.id === item.id)}
   //       loading={isLoading} />
   // })

   return (
      <div className={`${styles.content} p-40`}>
         <div className="d-flex align-center mb-40 justify-between">
            <h1>{searchValue ? `Пошук по запиту: ${searchValue}` : "Всі кросівки"}</h1>
            <div className={`${styles.searchBlock} d-flex`}>
               <img src="/img/search.svg" alt="Search" />
               <input onChange={onChangeSearchValue} value={searchValue} type="text" placeholder="Пошук..." />
               {searchValue && <img onClick={() => setSearchValue('')} className={styles.closeBtn} src="/img/close.svg" alt="close" />}
            </div>
         </div>

         <div className={`${styles.mainContent} d-flex `}>
            {renderItems()}
         </div>
      </div>
   )
}

export default Home;