import './App.css';
import Card from './components/Card';
import Imagen from './img/7E8A3786.jpg';

function App() {
  return (
    <>
      <Card
        class=""
        src={Imagen}
        alt="Podras"
        height="200px"
        tittle="All of me"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta commodi et perspiciatis provident dolore quaerat iste dolorum 
        ducimus minus aliquid, dignissimos cumque porro quia animi consequuntur, blanditiis inventore quos facilis."
      ></Card>
    </>
  );
}

export default App;
