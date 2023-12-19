import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlcok from "../components/PizzaBlock";

//FakeBlockPizza Skeleton
import Skeleton from "../components/PizzaBlock/Skeleton";

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://657c7774853beeefdb998017.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoading //спррашиваем если ты true то грузи фейк если false то грузи наши пиццы
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => <PizzaBlcok {...obj} />)
          //{...obj} вариант если мы уверены что имена объектов будут совпадать с именами нашимх пропсов в функции
          //2 вариант
          /*title = {obj.title} //слева это наши пропсы из PizzaBlock а справа это наш json Объект с пиццами
              price={obj.price} 
              imageUrl={obj.imageUrl}
              sizes={obj.sizes}
              types={obj.types} */
        }
      </div>
    </>
  );
};
export default Home;
