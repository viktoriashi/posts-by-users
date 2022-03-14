import React from "react";
import { Route, Routes } from "react-router-dom";
import App from '../../App';
import PostWithComm from '../PostWithComments';
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

    const {items, errorPosts, isLoadedPosts} = usePosts()
    const {users, errorUsers, isLoadedUsers} = useUsers()
    const {comments, errorComments, isLoadedComments} = useComments()

    if (errorPosts || errorUsers || errorComments) {
        return <div>Ошибка</div>;
      } else if (!isLoadedPosts || !isLoadedUsers || !isLoadedComments) {
        return <Loader/>;
      } else {
        return (
            <Routes>
              <Route path="/posts" element={<App posts={items} users={users}/>}/> 
              <Route path="/posts/:id" element={<PostWithComm posts={items} comments={comments}/>} /> 
            </Routes>
        )
      }
}

export default Router