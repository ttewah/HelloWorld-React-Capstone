import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Customer  from "./Customer";
import  Technician  from "./Technician";
import  Billing  from "./Billing";
import  Home  from "./Home";
//import {App} from './App';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="customer" element={<Customer />} />
          <Route path="technician" element={<Technician />} />
          <Route path="billing" element={<Billing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


