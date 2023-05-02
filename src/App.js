import './App.css';
import Home from "../src/components/home/Home"
import data from "../src/data/data.json"
import { Route, Routes } from 'react-router-dom';
import TourDetails from './components/TourDetails/TourDetails';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home dataJson={data} />}></Route>
        <Route path='/city/:id' element={<TourDetails dataJson={data} />} ></Route>
      </Routes>

    </>
  )
}

