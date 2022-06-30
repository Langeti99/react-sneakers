import styles from './Drawer.module.scss';


const Drawer = ({ onClose , dataCart, onCartDelete }) => {

   return (
      <div className={styles.overlay}>
         <div className={styles.drawer}>
            <div className="d-flex justify-between mb-30">
               <h2>Корзина</h2>
               <img onClick={onClose} className={`${styles.closeBtn} cu-p`} src="/img/close.svg" alt="close" />
            </div>

            {dataCart.length > 0 ?
             (<div>
               <div className={styles.items}>            
                  {dataCart.map((item) => {
                     const {src, label, price} = item;
                     return (
                     <div key={src} className={`d-flex ${styles.cartItem}`}>
                        <div style={{backgroundImage: `url(${src})`}} className={styles.cartItemImg}>
                        </div>
                        <div className="mr-25">
                        <p>{label}</p>
                        <b>{price}</b>
                        </div>
                        <img onClick={() => onCartDelete(item.id)} className={styles.closeBtn} src="/img/close.svg" alt="close" />
                     </div>)
                  })}
               </div>

               <div className={styles.cartTotalBlock}>
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
                  <button className={styles.greenButton}>Оформити замовлення <img src="/img/arrow.svg" alt="arrow" /></button>
               </div>
            </div>) 
            : 
           (<div class={styles.emptyCart}>
               <img width={120} height={120} src="/img/emptyBox.png" alt="emptyBox" />
               <h3>Корзина пуста</h3>
               <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
               <button onClick={onClose} className={styles.greenButton}>
                  <img src="/img/arrow.svg" alt="arrow" />
                  Вернутись назад
               </button>
            </div>)}
         </div>
      </div>
   )
}

export default Drawer;