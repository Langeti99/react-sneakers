import React, {Component} from "react";
import Card from "../card";
import Header from "../header";
import Drawer from "../drawer";

export default class AppExtends extends Component {  
  constructor(props){
    super(props);
    this.state = {
      data: [
        {src: '/img/sneakers/1.jpg', label: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999 грн.'},
        {src: '/img/sneakers/2.jpg', label: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 999 грн.'},
        {src: '/img/sneakers/3.jpg', label: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '4 999 грн.'},
        {src: '/img/sneakers/4.jpg', label: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 999 грн.'}
      ]
    }
  }
  render(){
    const {data} = this.state;
    const elements = data.map((item) => {
      const {...itemProps} = item; 
      return <Card key={item.src} {...itemProps}/>
    })


    return (
      <div className="wrapper clear">
        <Drawer /> 
  
        <Header />
        <div className="content p-40">
          <div className="d-flex align-center mb-40 justify-between">
            <h1>Всі кросівки</h1>
            <div className="searchBlock d-flex">
              <img src="/img/search.svg" alt="Search" />
              <input type="text" placeholder="Пошук..." />
            </div>
          </div>
  
          <div className="mainContent d-flex justify-between">
            {elements}
          </div>
        </div>
      </div>
    );
  }
}