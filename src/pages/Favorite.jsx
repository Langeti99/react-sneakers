import styles from '../components/app/App.module.scss';
import Card from '../components/card';

const Favorite = ({ dataFavorite, onFavorite, onAddToCart }) => {

   // const elements = filteredDataPosts().map((item) => {
   //    const { ...itemProps } = item;
   //    return <Card key={item.src} {...itemProps} onFavorite={() => onFavorite((item))} onAddToCart={() => onAddToCart(item)} />
   // })

   const elements = dataFavorite.map((item) => {
      const { ...itemProps } = item;
      return <Card key={item.src} {...itemProps} onFavorite={() => onFavorite((item))} onAddToCart={() => onAddToCart(item)} favorited />
   })

   return (
      <div className={`${styles.content} p-40`}>
         <div className="d-flex align-center mb-40 justify-between">
            <h1>"Улюблені: "</h1>
         </div>

         <div className={`${styles.mainContent} d-flex `}>
            {elements}
         </div>
      </div>
   )
}

export default Favorite;