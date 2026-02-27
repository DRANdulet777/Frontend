import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FragmentLayout from "./FragmentLayout";
import './App.css'
import ItemList from './ItemList';
import CombinedList from './CombinedList';

function App() {
  return (
    <>
    <FragmentLayout />
    <ItemList />
    <CombinedList />
    </>
  );
}

export default App;