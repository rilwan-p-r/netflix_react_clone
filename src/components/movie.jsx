import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/authContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieId = doc(db,'users', `${user?.email}`)
  const saveShow = async ()=>{
    if(user?.email){
      setLike(!like)
      setSaved(true)
      await updateDoc(movieId,{
        savedShows: arrayUnion({
          id:item.id,
          title:item.title || item.name,
          img:item.backdrop_path
        })
      })
    }else{
      alert('please log in to save a movie');
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] lg:w-[200px] inline-block cursor-pointer relative p-2">
      <img
        className="w-[160px] sm:w-[240px] inline-block cursor-pointer"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item.name}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.name || item?.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
