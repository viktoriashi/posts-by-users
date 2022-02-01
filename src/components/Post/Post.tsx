import React from "react";
import { useState, useContext } from "react";
import { IPost, IUser } from "../../App";
import ModalWindow from "../Modal/ModalWindow";
import './Post.css'
import ThemeContext from '../../context';


interface PostProps {
    post: IPost
    user: IUser | undefined
}

const Post: React.FC<PostProps> = ({post, user}) => {

    const [isModalOpen, setModalOpen] = useState<boolean>(false)
    const toggleModal = () => setModalOpen(!isModalOpen)
    const {themeType, setThemeType} = useContext(ThemeContext);

    return (
        <div className={`post__description ${themeType === 'light' ? "post__description-light" : "post__description-dark"}`}> 
            <div className="post__content">
                <div className="post__title">{post.title}</div>
                <div className="post__body">{post.body}</div>
            </div>
            <div className={`post__author ${themeType === 'light' ? "post__author-light" : "post__author-dark"}`}>
                <div className="post__author-maintext">Author: 
                <a className="post__author-text" onClick={toggleModal}>
                    {user?.name}
                </a>
                </div>
                <ModalWindow author={user} isOpen={isModalOpen} onClose={toggleModal}></ModalWindow>
            </div>
        </div>
    )
}



export default Post