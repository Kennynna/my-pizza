import './scss/app.scss';


//Components
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlcok from './components/PizzaBlock';

//json
import pizzas from './assets/pizzas.json';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {pizzas.map((obj) => {
            return(

              
              <PizzaBlcok {...obj} //1 вариант если мы уверены что имена объектов будут совпадать с именами нашимх пропсов в функции             

              
              //2 вариант 
              /**title = {obj.title} //слева это наши пропсы из PizzaBlock а справа это наш json Объект с пиццами
              price={obj.price} 
              imageUrl={obj.imageUrl}
              sizes={obj.sizes}
              types={obj.types} */ 
              />

            )
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
