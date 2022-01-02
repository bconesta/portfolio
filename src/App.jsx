import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Tittle from './components/Tittle';
import Imagen from './img/7E8A3786.jpg';

function App() {
  return (
    <>      
      <Navbar></Navbar>
      <Tittle
        tittle="Hi, I'm Bruno Conesta!"
        text="Scroll down to my work"
        class="tittle"
      ></Tittle>
      <Card
        inverted={false}
        class="card"
        src={Imagen}
        alt="Podras"
        height="350px"
        tittle="All of me"
        text="2021"
      ></Card>

      <Card
        inverted={true}
        class="card"
        src={Imagen}
        alt="Podras"
        height="350px"
        tittle="All of me"
        text="2021"
      ></Card>

      <Card
        inverted={false}
        class="card"
        src={Imagen}
        alt="Podras"
        height="350px"
        tittle="All of me"
        text="2021"
      ></Card>

      <Card
        inverted={true}
        class="card"
        src={Imagen}
        alt="Podras"
        height="350px"
        tittle="All of me"
        text="2021"
      ></Card>

    </>
  );
}

export default App;
