import React from "react";
import "./App.css";

function App() {
  return (
    <div className="Parentbox">
      <ProductImage />
      <ProductInfo isDiscount="yes" name="AJ Maximum" category="TAHUN BARU" />
      <ReviewsItem />
    </div>
  );
}

function ReviewsItem() {
  // mempersiapkan data dummy

  const users = [
    {
      id: 1,
      name: "Iqbal aulia",
      avatar:
        "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content:
        "Harga murah dan kualitas terjamin. Sesuai dengan benefit yang tersedia !!!",
    },
    {
      id: 2,
      name: "Tasha Annisa",
      avatar:
        "https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content:
        "Harga murah dan kualitas terjamin. Sesuai dengan benefit yang tersedia !!!",
    },
    {
      id: 3,
      name: "Naufal",
      avatar:
        "https://images.pexels.com/photos/1982852/pexels-photo-1982852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content:
        "Harga murah dan kualitas terjamin. Sesuai dengan benefit yang tersedia !!!",
    },
  ];

  const listReviews = users.map((itemReviews) => (
    <div className="Item">
      <img alt="gambar reviews" src={itemReviews.avatar} />
      <div className="User">
        <h3>{itemReviews.name}</h3>
        <p>{itemReviews.content}</p>
      </div>
    </div>
  ));

  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReviews}
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
