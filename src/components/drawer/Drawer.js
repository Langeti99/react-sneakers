const Drawer = () => {
   return (
      <div style={{display:'none'}} className="overlay">
         <div className="drawer">
         <div className="d-flex justify-between mb-30">
            <h2>Корзина</h2>
            <img className="closeBtn cu-p" src="/img/close.svg" alt="close" />
         </div>
         
         <div className="items">            
            <div className="cartItem d-flex">
               <div style={{backgroundImage: "url(/img/sneakers/1.jpg)"}} className="cartItemImg">
               </div>
               <div className="mr-25">
               <p>Мужские Кроссовки Nike Air Max 270</p>
               <b>12 333 грн.</b>
               </div>
               <img className="closeBtn" src="/img/close.svg" alt="close" />
            </div>

            <div className="cartItem d-flex">
               <div style={{backgroundImage: "url(/img/sneakers/2.jpg)"}} className="cartItemImg">
               </div>
               <div className="mr-25">
               <p>Мужские Кроссовки Nike Air Max 270</p>
               <b>8 333 грн.</b>
               </div>
               <img className="closeBtn" src="/img/close.svg" alt="close" />
            </div>
         </div>

         <div className="cartTotalBlock">
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
            <button className="greenButton">Оформити замовлення <img src="/img/arrow.svg" alt="arrow" /></button>
         </div>
         </div>
      </div>
   )
}

export default Drawer;