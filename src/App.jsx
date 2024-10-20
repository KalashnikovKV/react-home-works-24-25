import './App.css'
import ItemList from "./components/ItemListContainer/ItemList"

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default App;
