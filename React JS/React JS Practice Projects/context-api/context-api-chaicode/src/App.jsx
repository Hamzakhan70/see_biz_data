// import "./App.css";
// import Login from "./components/Login";
// import Profile from "./components/profile";
// import React from "react";
// import UserContext from "./context/UserContext";
// import UserContextProvider from "./context/UserContextProvider";
// function App() {
//   // const [user, setUser] = React.useState("");
//   return (
//     <UserContextProvider>
//       <h1>Hello React again with chai and code</h1>
//       <Login />
//       <Profile />
//     </UserContextProvider>
//     ///===========================
//     // <UserContext.Provider value={{ user, setUser }}>
//     //   <Login />
//     //   <Profile />
//     // </UserContext.Provider>

//     );
//   }

//   export default App;

//   // OS
import Login from "./components/Login";
import Profile from "./components/profile";
import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import StateLearn from "./StateLearn";
function App() {
  return (
    // <UserContextProvider>
    //   <h1>i have completed it after learning it by heart</h1>
    //   <Login></Login>
    //   <Profile></Profile>
    // </UserContextProvider>

    <>
      <h1>here start learning state and props concept</h1>
      <StateLearn />
    </>
  );
}

export default App;
