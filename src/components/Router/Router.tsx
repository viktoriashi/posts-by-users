import React from "react";
import { Route, Routes } from "react-router-dom";
import App from '../../App';
import PostWithComments from '../PostWithComments';
import usePosts from '../../usePosts';
import useUsers from '../../useUsers';
import Loader from "../Loader";
import useComments from "../../useComments";


export interface IPost {
    userId: number
    id: number
    title: string
    body: string
  }
  
export interface IUser {
    id: number
    name: string
    username: string
    email: string
    address: {
      street: string
      suite: string
      city: string
      zipcode: string
      geo: {
        lat: string
        lng: string
      }
    }
    phone: string
    website: string
    company: {
      name: string
      catchPhrase: string
      bs: string
    }
  }

export interface IComment {
    postId: number
    id: number
    name: string
    email: string
    body: string
}


const Router: React.FC = () => {

    return (
        <Routes>
          <Route path="/posts" element={<App />}/> 
          <Route path="/posts/:id" element={<PostWithComments />} /> 
        </Routes>
    )
      
}

export default Router