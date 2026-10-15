// import React from 'react';
// // import Products from './products';

// // function App() {
// //   return (
// //     <div className="w-full h-screen bg-zinc-300">
// //       <div className="w-96 flex items-center p-8 bg-[#50d71e] min-h-24 rounded-md">
// //         <h1>hello kaisa ho</h1>
// //       </div>

// //       <Products />
// //     </div>
// //   );
// // }

// function App() {
//   return 'hello';
// }

// export default App ;

// import React from 'react';
// import img from './assets/img.png';

// const App = () => {
//   return (
//     <div>
//       <h1>hello</h1>
//       <p>hi kaisi ho g</p>

//       <img src={img} alt="My image" />
//     </div>
//   );
// };

// export default App;


import React from 'react'
import logo from './assets/logo.png';
const App = () => {
  return (
    <>
      <div>

       <div className='navbar'>
<nav className='navbar-'>
  <div className="logo">
    <a href=''>
      <img id="logo" src={logo} alt="My image" /></a>
  </div>

  <ul className='nav-menu'>

    <li><a href=''>Home</a></li>
    <li><a href=''>New Arrivals</a></li>
    <li><a href=''>Sale</a></li>
    <li><a href=''>Collections</a></li>

  </ul>

</nav>


       </div>
      </div>

    
    </>
  
  )
}

export default App