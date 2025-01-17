import "./vendor/normalize.css";
import "./App.css";
import Header from "./components/Header/Header";
import AboutSection from "./components/AboutSection/AboutSection";
import Footer from "./components/Footer/Footer";

function App() {
  const handleSearch = (keyword) => {
    console.log("Searching for:", keyword);
    // Add API call logic here
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
