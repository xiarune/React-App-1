
import { useState } from "react";

function Sidebar({ initialMenuItems }) {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [newItem, setNewItem] = useState("");
  const [filter, setFilter] = useState("");

  // function to add a new menu item
  const addMenuItem = () => {
    if (newItem.trim() !== "") {
      setMenuItems([...menuItems, newItem]);
      setNewItem(""); // clear input after adding
    }
  };

  // filtering
  const filteredItems = menuItems.filter(item =>
    new RegExp(filter, "i").test(item)
  );

  return (
    <div>
      <h2>Menu</h2>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter menu items"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* add new items*/}
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new menu item"
      />
      <button onClick={addMenuItem}>Add</button>
    </div>
  );
}

export default Sidebar;
