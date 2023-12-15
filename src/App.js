//reacts
import axios from 'axios';
import React from 'react';

//Styles
import './scss/app.scss';
//FakeBlockPizza
import Skeleton from './components/PizzaBlock/Skeleton';

//Components
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlcok from './components/PizzaBlock';


//json
// import pizzas from './assets/pizzas.json'; данные перемещены на mok API
// https://657c7774853beeefdb998017.mockapi.io/items

function App() {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    fetch('https://657c7774853beeefdb998017.mockapi.io/items')
      .then(res => {
        return res.json();
      })
      .then(json => {
        setItems(json)
        setIsLoading(false)
      })
  }, [])


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
            {
              isLoading //спррашиваем если ты true то грузи фейк если false то грузи наши пиццы
              ? [... new Array(6)].map((_, index)=> <Skeleton key={index}/>): 
              items.map((obj)=><PizzaBlcok {...obj}/>) 
              //{...obj} вариант если мы уверены что имена объектов будут совпадать с именами нашимх пропсов в функции             
              //2 вариант 
              /*title = {obj.title} //слева это наши пропсы из PizzaBlock а справа это наш json Объект с пиццами
              price={obj.price} 
              imageUrl={obj.imageUrl}
              sizes={obj.sizes}
              types={obj.types} */
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
