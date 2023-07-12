import React, { useContext, useEffect, useReducer, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../lotties/notfound.json";
import { client } from "../main/client";
import { chatQuery } from "../main/data";
import AllChatsWidget from "../main/AllChatsWidget";
import Spinner from "../header/Spinner";
import { redirect, useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import authCheck from "../main/authCheck";
import { UserContext } from "../Contexts/UserContext";
import { useCurrentUser } from "../hooks/useCurrentUser";


const AllChats = () => {
  const navigate = useNavigate()
  const [allChats, setChats] = useState("");
  const [loading, setLoading] = useState(false);
  const {user, userLoading} = useCurrentUser()
  useEffect(() => {
    if(user){
    const query = chatQuery(user?.sub);
    client
      .fetch(query)
      .then((data) => {
        setChats(data);
        
      })
      .catch((err) => {
        console.log("fetching all chats err", err);
      });
    }
  }, [user]);

  const handleDelete = async (id)=> {
    try {
      setChats((prev)=> prev.filter(item => item._id !== id))
      await  client.delete(id)
    } catch (error) {
      console.log('Deleting error:', error);
    }
  }



  if (loading || !allChats || userLoading) return <Spinner />;
  if (allChats.length === 0)
    return (
      <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col justify-center items-center w-full ">
        <div className="lottie-container w-3/5 flex justify-center items-center md:w-1/5">
        <Lottie animationData={animationData} loop={true} />
        </div>
        <p className="font-semibold">You don't have any chat's yet!</p>
      </div>
    );
    
  return (
    <>
    <div className="allchats-container flex flex-col justify-center lg:items-center">
      <div className="chat-title px-4">
        <p className=" text-2xl">Chats</p>
      </div>
      <div className="chats">
      {allChats.map((item) => {
       return (
          <AllChatsWidget
            stuff={item}
            key={uuid()}
            deleteChat={handleDelete}
          />
        );
      })}
      </div>
      </div>
    </>
  );
};

export default AllChats;
