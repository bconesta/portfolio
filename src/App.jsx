import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Tittle from './components/Tittle';
import Domodin from './img/domodin/all.png';
import Gentec from './img/planty/all.png';
import Blog from './img/blog1.PNG';
import Cloxs from './img/ecloxs.PNG';
function App() {
  return (
    <>      
      <Navbar class="Navbar"></Navbar>
      <div className='body'>
      <Tittle
        tittle="Hi, I'm Bruno Conesta!"
        text="Scroll down to my work"
        class="tittle"
      ></Tittle>
      <Card
        inverted={false}
        class="card"
        src={Gentec}
        alt="Podras"
        height="350px"
        tittle="Mi Planty"
        text="2021"
        href="/planty"
      ></Card>

      <Card
        inverted={true}
        class="card"
        src={Cloxs}
        alt="Podras"
        height="350px"
        tittle="eCloxs"
        text="2021"
        href="/ecloxs"
      ></Card>

      <Card
        inverted={false}
        class="card"
        src={Blog}
        alt="Podras"
        height="350px"
        tittle="Personal blog"
        text="2021"
        href="/blog"
      ></Card>

      <Card
        inverted={true}
        class="card"
        src={Domodin}
        alt="Podras"
        height="350px"
        tittle="Domodin"
        text="2020"
        href="/domodin"
      ></Card>
      </div>
    </>
  );
}

export default App;
