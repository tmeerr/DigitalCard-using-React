import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mymain from '../components/Mymain'
import Mybody from '../components/Mybody'
import Myfooter from '../components/Myfooter'

function App() {

  return (
    <section>
      <Mymain />
      <Mybody />
      <Myfooter />
    </section>
  )
}

export default App
