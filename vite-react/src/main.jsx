import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const ReactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Visit Google'
// }

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google !!!</a>
)

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // anotherElement
 
  reactElement
  
)
