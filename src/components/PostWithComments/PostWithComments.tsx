import React from "react";
import { useState, useContext } from "react";
import { IPost, IComment } from "../Router/Router";
import ThemeContext from '../../context';
import { useParams } from 'react-router-dom';
import PostDetails from "../PostDetails";

interface PostWithCommProps {
    posts: Array<IPost>
    comments: Array<IComment>
}

const PostWithComm: React.FC<PostWithCommProps> = ({posts, comments}) => {

    const {themeType, setThemeType} = useContext(ThemeContext);
    
    let params = useParams()
    let post: IPost|undefined = posts.find( post => post.id === Number(params.id))
    let relevantComments:Array<IComment> = []

    comments.map((comment, index) => {
        if (comment.postId === post?.id)
            relevantComments.push(comment)
    })
   
    return (
        <PostDetails post={post} comments={relevantComments} themeType={themeType}/>
    )
}


export default PostWithComm