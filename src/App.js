import React from "react";
import "./App.css";

function App() {
  return (
    <div className="Parentbox">
      <ProductImage />
      <ProductInfo name="AJ Maximum" category="TAHUN BARU" />
    </div>
  );
}

function ProductImage() {
  return (
    <div className="Foto">
      <img alt="foto sepatu" src="/assets/img/sepatuCover.jpg" />
    </div>
  );
}

function ProductInfo(props) {
  const { category, name } = props;
  const price = 750000;
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title"> {name}</h1>
        <p className="Price">IDR {price}</p>
        <p className="Info">
          One of the most recognizable shoes in the IQ collection, the Air
          Jordan 5 Maximus features lightweight, visible cushioning just like
          the original from '88. Signature details and materials celebrate the
          game-changing icon.'
        </p>
      </div>
    </div>
  );
}

export default App;
