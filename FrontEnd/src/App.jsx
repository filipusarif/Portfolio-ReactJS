import React from 'react'

// component & property(props)
// class Hello extends React.Component {
//   render() {
//     return <h1>Hello, filp </h1>;
//   }
// }

// const Hello = (props) => {
//   const {color = 'bg-black'} = props;
//   return [
//     <button className={`${props.color}`}>hello {props.children}</button>
//   ]
// }

function Hello(props) {
  return [
    <button className={`${props.color}`}>hello {props.children}</button>
  ]
}

function App() {
  return (
    <div className='bg-blue-200 h-screen flex justify-center items-center '>
      <Hello color='bg-blue-700 py-1 px-3 rounded-md text-2xl text-white'></Hello>
    </div>
  )
}

export default App
