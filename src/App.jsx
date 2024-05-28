import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Kinda from './kinda.jsx'
import './assets/css/main.css'

function App() {

  const services = [
    {
      image : './src/assets/img/depositphotos_73287889-stock-photo-smiling-beautiful-brunette-taking-pictures.jpg' ,
      title : "service1"
    } ,
    {
      image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fphotos%2Fdigital-photography.html&psig=AOvVaw0RKwv00ah8QOaJTIu3F9Tu&ust=1716459848239000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjAm7GFoYYDFQAAAAAdAAAAABAk" ,
      title : "service2"
    } ,
    {
      image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fphotos%2Fdigital-photography.html&psig=AOvVaw0RKwv00ah8QOaJTIu3F9Tu&ust=1716459848239000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjAm7GFoYYDFQAAAAAdAAAAABAk" ,
      title : "service3"
    } 
  ]
  return (
    <div>
      <div>
      <img src ={services[0].image} />
        {services[0].title}
      </div>
      <div>
        <img src ={services[1].image} />
      </div>
      <div>
        {services[2].title}
      </div>

    </div>

  )




  return (
    <>

    </>
  )
}

export default App
