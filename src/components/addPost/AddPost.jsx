import React, { useState } from "react";
import "./addPost.css";
import CurrentUser from "../../FakeApis/CurrentUserData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faSmile,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";


const AddPost = () => {
  const [title, setTitle] = useState("");
  const [textValue, setTextValue] = useState("");
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log("file", file);
    setImageURL(URL.createObjectURL(file));
    setImage(file);
  };
  const addPost = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("facebook-token");
    var myHeaders = new Headers();
    myHeaders.append("projectID", "f104bi07c490");
    myHeaders.append("Authorization", "Bearer " + token);

    var formdata = new FormData();
    formdata.append("title", "title");
    formdata.append("content", textValue);
    formdata.append("images", image);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
    };

    const resp = await fetch(
      "https://academics.newtonschool.co/api/v1/facebook/post",
      requestOptions
    )
      .then(async (response) => {
        const res = await response.json();
        console.log("status", res);
        if (res.status === "success") {
          setTextValue("");
          setImage(null);
          setImageURL(null);
          toast.success(res.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        return response;
      })
      .then((result) => {
        console.log("result", result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <form className="postForm">
      <div className="user form-top">
        <img src={CurrentUser.map((user) => user.ProfieImage)} alt="" />
        {/* <img src={localStorage.getItem("profileImage")} alt="" /> */}
        <input
          type="text"
          placeholder="What's on your mind ?"
          value={textValue}
          onChange={(e) => {
            e.preventDefault();
            setTextValue(e.target.value);
          }}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => addPost(e)}
        >
          Post
        </button>
      </div>
      <div className="post-categories">
        <label htmlFor="file">
          <input type="file" id="file" onChange={handleImageChange} />
          <span>
            <FontAwesomeIcon icon={faImage} style={{color: "#2e0196f1" , fontSize: "20px"}} /> Photos
          </span>
        </label>
        <label htmlFor="file">
          <input type="file" id="file" onChange={handleImageChange} />
          <span>
            <FontAwesomeIcon icon={faVideo} style={{color: "#bb0000f2" , fontSize: "20px"}} /> Videos
          </span>
        </label>
        <span>
          <FontAwesomeIcon icon={faSmile} style={{color: "#bfc600ec" , fontSize: "20px"}} /> Feelings/Activity
        </span>
      </div>
      {image && (
        <div>
          <img src={imageURL} alt="Preview" />
        </div>
      )}
    </form>
  );
};

export default AddPost;
