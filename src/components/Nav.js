import React from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Stack direction="horizontal" gap="3">
      <Link to="/home">Home</Link>
      <Link to="/hook">Hooks</Link>
      <Link to="/about">About</Link>
    </Stack>
  );
};

export default Nav;
