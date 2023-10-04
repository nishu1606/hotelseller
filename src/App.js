
import './App.css';
import HotelLis from './HotelLis'


function App() {
  return (
    <div className="App">
        <h1>Featured Listed Property</h1>
        <p>Real estate can be bought, sold, leased, or rented, and can be a 
         valuabe investment opportunity. The value of real estate can be...
        </p>
        <HotelLis/>
        <button className='bt' style={{fontSize:30, padding:30, alignItems:"center", display:"flex", justifyContent:"center", marginLeft:1200, marginTop:100, color:"white",backgroundColor:"blue", borderRadius:25}}>Show More</button>
      </div>
    
  );
  
}

export default App;
