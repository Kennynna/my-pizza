import React from "react";

//components
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlcok from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
//Сторонние библеотеки склетеон 
import Skeleton from "../components/PizzaBlock/Skeleton";
import { SearchContext } from "../App";

//redux
import {useDispatch, useSelector} from 'react-redux'
import {setCategoryID} from '../redux/slices/filterSlice'




export const Home = () => {
  //redux обработчики 
  const dispath = useDispatch()
  const {categoryId, sort} = useSelector((state) => state.filter)


  const onChangeCategory = (id) => {
    dispath(setCategoryID(id))
  }

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const { searchValue } = React.useContext(SearchContext);

  
  
  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(
      `https://657c7774853beeefdb998017.mockapi.io/items?&page=${currentPage}&limit=5${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ошибка при выполнении запроса");
        }
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(`${error}`);
        setIsLoading(false);
      });
    window.scroll(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);
  const pizzas = items.map((obj, index) => <PizzaBlcok {...obj} key={index*12} />);
  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  return (
    
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={onChangeCategory}
        />
        <Sort/>
        
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoading ? skeleton : pizzas
          /*{...obj} вариант если мы уверены что имена объектов будут совпадать с именами нашимх пропсов в функции
              2 вариант
              title = {obj.title} //слева это наши пропсы из PizzaBlock а справа это наш json Объект с пиццами
              price={obj.price} 
              imageUrl={obj.imageUrl}
              sizes={obj.sizes}
              types={obj.types} */
        }
        
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)}  />
    </div>
  );
};
export default Home;
