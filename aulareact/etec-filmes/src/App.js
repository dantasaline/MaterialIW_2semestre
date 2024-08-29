import Banner from "./components/Banner";
import Container, {categories, filterCategory} from "./components/Container";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Header from "./components/Header";
import Category from "./components/Category";

function App() {
  return (
    <>
      <Header/>
      <Banner image="home" />
      <Container>

        {categories.map((category, index) =>
          <Category category={category}>
            { filterCategory(index).map((video) => <Card id={video.id} key={video.id} /> )}
          </Category>
        )}

      </Container>      
      <Footer/>
    </>
  );
}

export default App;
