import React, { useState } from "react";
import { uploadPost } from "../services/api";
import { useNavigate } from "react-router-dom";

function SetEvent() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("You must be logged in to upload posts");
      return;
    }

    // Prepare form data with all required fields
    const formData = new FormData();
    formData.append("user_id", user.id); // Attach user ID to the post
    formData.append("title", title); // New field: Title
    formData.append("date", date); // New field: Date
    formData.append("price", price); // New field: Price
    formData.append("location", location); // New field: Location
    formData.append("caption", caption);
    formData.append("image", image); // Image file

    try {
      await uploadPost(formData);
      alert("Post uploaded successfully");
      // Optionally, reset the form fields after upload
      setTitle("");
      setDate("");
      setPrice("");
      setLocation("");
      setCaption("");
      setImage(null);
      navigate("/");
    } catch (error) {
      alert("Failed to upload post");
    }
  };

  return (
    <div className="py-9">
      {/* // <!-- component --> */}
      <div className="heading text-center font-bold text-2xl m-5 text-white">
        New Event
      </div>
      <form onSubmit={handleUpload} action="">
        <div className="bg-white editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            spellCheck="false"
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            spellCheck="false"
            placeholder="Event Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            spellCheck="false"
            placeholder="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            spellCheck="false"
            placeholder="Entre Event Location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <textarea
            className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
            spellCheck="false"
            placeholder="Describe everything about this Event here"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            required
          ></textarea>
          <br />
          <input type="file" onChange={handleFileChange} required />
          {/* <!-- buttons --> */}
          <div className="buttons flex py-5">
            <button
              type="submit"
              className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
    // <form onSubmit={handleUpload}>
    //   <h2>Upload Post</h2>
    //   <input
    //     type="text"
    //     placeholder="Caption"
    //     value={caption}
    //     onChange={(e) => setCaption(e.target.value)}
    //     required
    //   />
    //   <input type="file" onChange={handleFileChange} required />
    //   <button type="submit">Upload</button>
    // </form>
  );
}

export default SetEvent;
