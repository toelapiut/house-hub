
import React from "react";
import { Link } from 'react-router-dom';

function Error404(){
  return (
    <div>
      <h2>The page you're looking for doesn't exist!</h2>
      <h3>Would you like to  <a href="/dashboard">return</a> instead?</h3>
    </div>
  );
}

export default Error404;