import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Categories from "./components/Category";
import Menu from "./components/Menu";
import data from "./data";

function App() {
  const [menuItem, setMenuItems] = useState(data);
  const allCategories = [
    "All",
    ...new Set(
      data.map((item) => {
        return item.category;
      })
    ),
  ];
  //console.log(allCategories);
  const filterItem = (category) => {
    if (category === "All") {
      setMenuItems(data)
    } else {
      const newItem = data.filter((item) => item.category === category);
      setMenuItems(newItem);
    }
  };

  return (
    <div>
      <h2>Workshop 2 : Food Menu</h2>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our menu</h2>
            <div className="underline"></div>
            <Categories allCategories={allCategories} filterItem={filterItem} />
            <Menu items={menuItem} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;