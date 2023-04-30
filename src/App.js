import './App.css';
import Home from "../src/components/home/Home"
import data from "../src/data/data.json"

export default function App() {
  return (
    <>
      <Home dataJson={data} />
      {/* dataJSON is the proparity Key and data is the value */}

    </>
  )
}

