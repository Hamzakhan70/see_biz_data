// import React from "react";
// import UserContext from "./UserContext";
// const UserContextProvider = ({ children }) => {
//   const [user, setUser] = React.useState("");

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {/* {console.log(children)} */}
//       {children}
//     </UserContext.Provider>
//   );
// };
// export default UserContextProvider;

/// OS
import React, { useState } from "react";
import userContext from "./UserContext";
function UserContextProvider({ children }) {
  const [user, setUser] = useState("");
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
