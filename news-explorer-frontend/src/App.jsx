import "./vendor/normalize.css";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const handleSearch = (keyword) => {
    console.log("Searching for:", keyword);
    // Add API call logic here
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
    </div>
  );
}

export default App;
