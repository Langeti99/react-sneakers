import React from 'react';
import styles from './Card.module.scss';


const Card = ({src, label, price, onAddToCart}) => {
   const [isAdded, setIsAdded] = React.useState(false);

   const onClickPlus = () => {
      onAddToCart();
      setIsAdded(!isAdded);
   }
   
   return (
      <div className={styles.card}>
         <div className={styles.favorite}>
         <img src="/img/heartDontLiked.svg" alt="Unliked" />
         </div>
         <img width={133} height={112} src={src} alt="sneaker" />
         <h5>{label}</h5>
         <div className="d-flex justify-between align-center">
         <div className="d-flex flex-column">
            <span>Ціна:</span>
            <b>{price}</b>
         </div>
         <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btnChecked.svg" : "/img/btnPlus.svg"} alt="plus" />
         </div>
      </div>
   )
}

export default Card;