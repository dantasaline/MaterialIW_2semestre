import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Container>
        <h1>ETEC MCM</h1>
        <p>Olá Mundo</p>
      </Container>
      
      <Footer></Footer>
    </>
  );
}

export default App;
