import React , {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,setSelectedCategory] = useState('All')
  const [filteredItems, setFilteredItems] = useState(items);

  const filterItems = (category) => {
    if (category === 'All') {
      setFilteredItems(items); 
    } else {
      const filtered = items.filter(item => item.category === category);
      setFilteredItems(filtered);
    }
  };

  // function selectCategoryHandler(event){
  //   const selectedItem = items.filter(item => item.category === event.target.value)
  //   setFilteredItems(selectedItem)
  // }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select 
        name="filter" 
        value={selectedCategory} 
        onChange={e => {
          setSelectedCategory(e.target.value); 
          filterItems(e.target.value);
        }
      } 
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item 
          key={item.id} 
          name={item.name} 
          category={item.category} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
