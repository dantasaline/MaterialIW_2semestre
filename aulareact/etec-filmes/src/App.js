import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Header from "./components/Header";


function App() {
  return (
    <>
      <Header/>
      <Banner image="home" />
      <Container>
        <h1>Desenhos</h1>
        <section className="cards">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </section>
      </Container>      
      <Footer/>
    </>
  );
}

export default App;
