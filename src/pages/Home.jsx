import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlcok from "../components/PizzaBlock";

//FakeBlockPizza Skeleton
import Skeleton from "../components/PizzaBlock/Skeleton";

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0); //Category jsx изначально были в этом компоенте
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  }); //Sort jsx

  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace('-','');
    const order = sortType.sortProperty.includes('-') ? 'asc': 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    fetch(
      `https://657c7774853beeefdb998017.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Ошибка при выполнении запроса');
        }
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(`${error}`);
        setIsLoading(false);
      });
      window.scroll(0,0);
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoading //спррашиваем если ты true то грузи фейк если false то грузи наши пиццы
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => <PizzaBlcok {...obj} />)
          /*{...obj} вариант если мы уверены что имена объектов будут совпадать с именами нашимх пропсов в функции
              2 вариант
              title = {obj.title} //слева это наши пропсы из PizzaBlock а справа это наш json Объект с пиццами
              price={obj.price} 
              imageUrl={obj.imageUrl}
              sizes={obj.sizes}
              types={obj.types} */
        }
      </div>
    </div>
  );
};
export default Home;
