function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo"/>
          <div>
            <h3>REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30"><img width={18} height={18} src="/img/card.svg" alt="icon"/><span>1200 грн.</span></li>
          <li><img width={18} height={18} src="/img/user.svg" alt="icon2"/></li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Всі кросівки</h1>

        <div className="d-flex justify-between">
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneaker" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>12 999 грн.</b>
              </div>
              <button className="button">
                <img src="/img/Plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="sneaker" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>12 999 грн.</b>
              </div>
              <button className="button">
                <img src="/img/Plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="sneaker" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>12 999 грн.</b>
              </div>
              <button className="button">
                <img src="/img/Plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="sneaker" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>12 999 грн.</b>
              </div>
              <button className="button">
                <img src="/img/Plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
