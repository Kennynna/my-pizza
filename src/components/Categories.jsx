import React from 'react'

const Categories = () => {
// Начальное состояние - "Все"
  const [activeCategory, setActiveCategory] = React.useState(0);
//массив с категориями
  const сategoriesArr = [
  'Все', 
  'Мясные', 
  'Вегетарианская', 
  'Гриль', 
  'Острые', 
  'Закрытые'
]
  // Функция для обновления активной категории
  const onClickCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        {/* Используйте функцию map для создания элементов списка */}
        {сategoriesArr.map((value,i) => (
          <li 
            onClick={() => onClickCategory(i)}
            className={activeCategory === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;