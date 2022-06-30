import styles from '../components/app/App.module.scss';
import Card from '../components/card';

const Home = ({ searchValue,
   onChangeSearchValue,
   setSearchValue,
   filteredDataPosts,
   onFavorite,
   onAddToCart }) => {

   const elements = filteredDataPosts().map((item) => {
      const { ...itemProps } = item;
      return <Card key={item.src} {...itemProps} onFavorite={() => onFavorite((item))} onAddToCart={() => onAddToCart(item)} />
   })

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
            {elements}
         </div>
      </div>
   )
}

export default Home;