import React from "react";
import "./App.css";

function App() {
  return (
    <div className="Parentbox">
      <ProductImage />
      <ProductInfo isDiscount="yes" name="AJ Maximum" category="TAHUN BARU" />
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

function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount == "yes") {
    return <p>Diskon 50% off</p>;
  } else if (isDiscount == "coming") {
    return <p>Akan ada diskon...</p>;
  } else {
    return <p>Belum ada diskon</p>;
  }
}

function ProductInfo(props) {
  const { category, name, isDiscount } = props;
  const benefits = [
    "Waterproof",
    "Anti kusut",
    "Mudah dibersihkan",
    "Anti debu",
  ];
  const price = 750000;
  const listBenefits = benefits.map((itemBenefit) => <li>{itemBenefit}</li>);
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title"> {name}</h1>
        <p className="Price">IDR {price}</p>
        <CheckDiscount isDiscount={isDiscount} />
        <p className="Info">
          One of the most recognizable shoes in the IQ collection, the Air
          Jordan 5 Maximus features lightweight, visible cushioning just like
          the original from '88. Signature details and materials celebrate the
          game-changing icon.'
        </p>
        <ul>{listBenefits}</ul>
        <a onClick={(e) => AddToCard(name, e)} href="#">
          Add to Chart
        </a>
      </div>
    </div>
  );
}

function AddToCard(e) {
  console.log("Buy product " + e);
}
export default App;
