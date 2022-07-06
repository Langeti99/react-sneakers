import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';


const Card = ({
         src,
         label,
         price,
         onAddToCart,
         onFavorite,
         favorited = false,
         added = false,
         loading}) => {
   const [isAdded, setIsAdded] = React.useState(added);
   const [isFavorite, setIsAddedFavorite] = React.useState(favorited);

   const onClickPlus = () => {
      onAddToCart();
      setIsAdded(!isAdded);
   }

   const onClickFavorite = () => {
      onFavorite();
      setIsAddedFavorite(!isFavorite);
   }

   
   return (

      <div className={`${styles.card} mr-40`}>
         {
            loading ? (
               <ContentLoader 
                  speed={2}
                  width={165}
                  height={245}
                  viewBox="0 0 165 245"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
               >
                  <rect x="0" y="0" rx="10" ry="10" width="165" height="135" /> 
                  <rect x="0" y="157" rx="5" ry="5" width="165" height="15" /> 
                  <rect x="0" y="177" rx="5" ry="5" width="100" height="15" /> 
                  <rect x="0" y="214" rx="6" ry="6" width="80" height="25" /> 
                  <rect x="130" y="210" rx="10" ry="10" width="32" height="32" />
               </ContentLoader>
            ) : (
               <>
                  <div className={styles.favorite}>
                     <img onClick={onClickFavorite} src={isFavorite ? "/img/heartLiked.svg" : "/img/heartDontLiked.svg"} alt="Unliked" />
                     </div>
                     <img width="100%" height={130} src={src} alt="sneaker" />
                     <h5>{label}</h5>
                     <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>Ціна:</span>
                        <b>{price}</b>
                     </div>
                     <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btnChecked.svg" : "/img/btnPlus.svg"} alt="plus" />
                  </div>
               </>
            )
         }
      </div>
   )
}

export default Card;