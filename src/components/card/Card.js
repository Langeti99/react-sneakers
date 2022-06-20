const Card = (props) => {
   const {src, label, price} = props;
   return (
      <div className="card">
         <div className="favorite">
         <img src="/img/heartDontLiked.svg" alt="Unliked" />
         </div>
         <img width={133} height={112} src={src} alt="sneaker" />
         <h5>{label}</h5>
         <div className="d-flex justify-between align-center">
         <div className="d-flex flex-column">
            <span>Ціна:</span>
            <b>{price}</b>
         </div>
         <button className="button">
            <img src="/img/Plus.svg" alt="plus" />
         </button>
         </div>
      </div>
   )
}

export default Card;