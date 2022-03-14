import React from "react";
import { useState, useContext } from "react";
import { IPost, IUser } from "../Router/Router";
import ThemeContext from '../../context';
import PaperPost from "../PaperPost";


interface PostProps {
    post?: IPost
    user?: IUser
}

const Post: React.FC<PostProps> = ({post, user}) => {

    const [isModalOpen, setModalOpen] = useState<boolean>(false)
    const toggleModal = () => setModalOpen(!isModalOpen)
    const {themeType, setThemeType} = useContext(ThemeContext);

    return (
        <PaperPost post={post} user={user} isModalOpen={isModalOpen} toggleModal={toggleModal} themeType={themeType}/>
    )
}


export default Post