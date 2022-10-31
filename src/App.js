// pages
import A from "./pages/A/A";
import O from "./pages/O/O";
import R from "./pages/R/R";


//detail



import { Route, Routes } from "react-router-dom"
import React from "react";

//component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hommy from "./pages/Hommy/Hommy";






function App() {
  const MENU = [
    {
      name: "Hommy",
      path: "/",
      element: <Hommy />,
      title: "Hommmy",
     
    },
    {
      name: "A",
      path: "/A",
      element: <A />,
      title: "A",
      
    },

    {
      name: "O",
      path: "/O",
      element: <O />,
      title: "R",
      
    },
    {
      name: "R",
      path: "/R",
      element: <R />,
      title: "R",
    },
    
   
  ];
  return (
    <div className="page-container" >
    <div className="content-wrap">

    </div>
    <div>
      <Navbar MENU={MENU} />
      <Routes>
        {/* <Route  path="/Banner" element={<BannerMain />} />
        <Route path="/videos" element={<VideoMain/>}/> */}
        {MENU?.map((page, index) => {
          return (
            <Route
              key={`key-of-route-${index}`}
              path={page.path}
              element={page.element}
            />
          );
        })}
      </Routes>
      </div>
      <Footer /> 
    </div>
  );
}

export default App;