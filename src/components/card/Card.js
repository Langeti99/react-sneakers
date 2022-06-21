import styles from './Card.module.scss';


const Card = (props) => {
   const {src, label, price} = props;
   const {onClick} = props; 
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
         <button className="button" onClick={() => onClick()} >
            <img src="/img/Plus.svg" alt="plus" />
         </button>
         </div>
      </div>
   )
}

export default Card;