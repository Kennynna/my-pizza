import React from 'react'

const Categories = ({value, onChangeCategory}) => {

//массив с категориями
  const сategoriesArr = [
  'Все', 
  'Мясные', 
  'Вегетарианская', 
  'Гриль', 
  'Острые', 
  'Закрытые'
]

  return (
    <div className="categories">
      <ul>
        {/* Используйте функцию map для создания элементов списка */}
        {сategoriesArr.map((categoryName,i) => (
          <li
            key={i} 
            onClick={() => onChangeCategory(i)}
            className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;