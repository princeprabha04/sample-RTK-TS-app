import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import UseMemo from "./UseMemo";

const Homepage = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "15% 85%" }}>
      <div
        style={{
          background: "#6b41a5",
          height: "100vh",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        //   position:"sticky"
        }}
      >
        <div style={{alignContent:'center', paddingLeft:'50px', marginTop:'50px'}}>
          <Link to="/home/react/usememo" style={{fontSize:'25px', color:'#fff'}}>
            useMemo
          </Link>
        </div>
      </div>
      <div style={{ background: "#dfd3eb", height: "96vh", padding: "18px", overflow:'auto' }}>
        <h2 style={{display:'flex', justifyContent:'center'}}>Welcome To React</h2>
        <Outlet />
      </div>
    </div>
  );
};

export default Homepage;
