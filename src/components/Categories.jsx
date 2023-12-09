import React, { useState } from 'react';

const Categories = () => {
  // Начальное состояние - "Все"
  const [activeCategory, setActiveCategory] = useState('Все');
  const Categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  // Функция для обновления активной категории
  const updateActiveCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="categories">
      <ul>
        {/* Используйте функцию map для создания элементов списка */}
        {Categories.map((category) => (
          <li 
            key={category}
            onClick={() => updateActiveCategory(category)}
            className={activeCategory === category ? 'active' : ''}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;