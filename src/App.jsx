import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter/GallaryFooter.jsx';
import Header from "./components/GallaryHeader/GallaryHeader"
import Body from "./components/GallaryBody/GallaryBody.jsx"
import imageData from './components/Datacomponent/DataComponent.jsx';


function App() {
  return (
    <div>
      <Header/>
      <Body data = {imageData} />
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
