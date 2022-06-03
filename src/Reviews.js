import React from "react";
import "./App.css";

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

export default ReviewsItem;
