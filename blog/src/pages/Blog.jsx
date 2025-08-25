import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  blog_data,
  comments_data,
} from "../assets/QuickBlog-Assets/assets";
import Navbar from "../componenets/Navbar";
import Moment from "moment";
import parse from "html-react-parser";
import Footer from "../componenets/Footer";
import Loader from "../componenets/Loader";

function Blog() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogData = async () => {
    const data = blog_data.find((item) => item._id === id);
    setData(data);
  };

  const fetchCommentsData = async () => {
    setComments(comments_data);
  };

  const addComment = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetchBlogData();
    fetchCommentsData();
  }, []);

  return data ? (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      ></img>
      <Navbar />
      <div className="text-center mt-20 text-gray-600">
        <p className="text-primary py-4 font-medium">
          Published on {Moment(data.createdAt).format("MMMM Do YYYY, h:mm a")}{" "}
        </p>
        {/* installed npm->moment to convert date and time*/}
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
          {data.title}
        </h1>
        <h2 className="my-5 max-w-lg truncate mx-auto">
          {parse(data.subTitle)}
        </h2>
        <p
          className="inline-block py-1 px-4 rounded-full mb-6 border text-sm 
        border-primary/35 bg=primary/5 font-medium text-primary"
        >
          author name
        </p>
      </div>

      <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <img src={data.image} alt="" className="rounded-3xl mb-5"></img>

        <div className="rich-text max-w-3xl mx-auto">
          {parse(data.description)}
        </div>

        {/*comments section now */}
        <div className="max-w-3xl mx-auto mt-14 mb-auto">
          <p className=" font-semibold mb-4">Comments ({comments.length})</p>
          <div className="flex flex-col gap-4 ">
            {comments.map((item, index) => (
              <div
                key={index}
                className="relative bg-primary/2 border border-primary/10  max-w-xl p-4 rounded text-gray-600"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src={assets.user_icon} alt="" className="w-6" />
                  <p className="font-medium">{item.name}</p>
                </div>
                <p className="text-sm max-w-md ml-8">{item.content}</p>
                <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*add comments section */}
        <div className="max-w-3x1 mx-auto">
          <p className="font-semibold mb-4 mt-8">Add your comment</p>
          <form
            onSubmit={addComment}
            className="flex flex-col items-start gap-4 max-w-lg"
          >
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
            <textarea
              placeholder="Comment"
              onChange={() => {
                setContent(e.target.value);
              }}
              value={content}
              className="w-full p-2 border border-gray-300 rounded outline-none h-48"
              required
            ></textarea>
            <button
              className="bg-primary text-white p-2 rounded px-8
            hover:scale-105 transition-all cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        {/*share buttons */}
        <div className="my-24 max-w-3x1 mx-auto">
          <p className="font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <img className="hover:scale-110 cursor-pointer transition-all " src={assets.facebook_icon} width={50} alt="" />
            <img className="hover:scale-110 cursor-pointer transition-all " src={assets.twitter_icon} width={50} alt="" />
            <img className="hover:scale-110 cursor-pointer transition-all " src={assets.googleplus_icon} width={50} alt="" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  ) : (
    <Loader/>
  );
}

export default Blog;
