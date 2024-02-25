import React, { useEffect, useState, useContext } from "react";

import "./View.css";
import { PostContext } from "../../Store/PostContext";
import { FirebaseContext } from "../../Store/Context";
function View() {
  const [userDetail, setUserDetails] = useState();
  const { postDetail } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const { userId } = postDetail;
    firebase
      .firestore()
      .collection("users")
      .where("id", "==", userId)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          setUserDetails(doc.data());
        });
      });
  }, []);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetail.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetail.price} </p>
          <span>{postDetail.name}</span>
          <p>{postDetail.category}</p>
          <span>{postDetail.createdAt}</span>
        </div>
        {userDetail && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetail.username}</p>
            <p>{userDetail.phonenumber}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default View;
