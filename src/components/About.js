import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>This is ABOUT page</h1>
      <button onClick={() => navigate("/hook")}> back to Hooks</button>
      <button onClick={() => navigate("/home")}> back to home</button>
    </div>
  );
};

export default About;
