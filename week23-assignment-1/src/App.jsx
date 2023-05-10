import './App.css';
import data from './data.js';
import TariffCard from './TariffCard';


function App() {
  return (
    <section className="section">
      {
        data.map ((item) => 
        <TariffCard key={item.id} isSelected={item.isSelected} headerColor={item.headerColor} price={item.price} tariffColor={item.tariffColor} ></TariffCard>
        )
      }
    </section>
  );
}

export default App;
