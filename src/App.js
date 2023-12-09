import './scss/app.scss';


//Components
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlcok from './components/PizzaBlock';



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
          <PizzaBlcok  title = 'Мексиканская' price={500}/>
          <PizzaBlcok  title = 'Куринная' price={300}/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
