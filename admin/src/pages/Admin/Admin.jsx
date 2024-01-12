import React from "react";
import { Routes, Route } from "react-router-dom";
import "./admin.css";
import Sidebar from "../../components/sidebar/Sidebar";
import AddProduct from "../../components/addProduct/AddProduct";
import ListProduct from "../../components/listProduct/ListProduct";

export default function Admin() {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
}
