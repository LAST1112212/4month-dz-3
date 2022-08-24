import './App.css';
import AboutUsClass from "./pages/AboutUsClass/AboutUsClass";
import PortfolioClass from "./pages/PortfolioClass/PortfolioClass";
function App() {
  const user = {
    name: 'Anna',
    age: 19
  }
  return (
    <div>
      <AboutUsClass name={user.name} age={user.age}/>
      <PortfolioClass name={user.name} age={user.age}/>
    </div>
  )
}
export default App;