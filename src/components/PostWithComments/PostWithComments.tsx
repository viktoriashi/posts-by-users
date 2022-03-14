import React from "react";
import { useState, useContext } from "react";
import { IPost, IComment } from "../Router/Router";
import ThemeContext from '../../context';
import { useParams } from 'react-router-dom';
import PostDetails from "../PostDetails";
import Loader from '../Loader';
import useOnePost from '../../useOnePost';
import useComments from '../../useComments';


const PostWithComments: React.FC = () => {

    const {themeType, setThemeType} = useContext(ThemeContext);
     
    let params = useParams()
    const {post, errorPost, isLoadedPost} = useOnePost(Number(params.id))
    const {comments, errorComments, isLoadedComments} = useComments(Number(params.id))

    if (errorPost || errorComments) {
        return <div>Ошибка</div>;
      } else if (!isLoadedPost || !isLoadedComments) {
        return <Loader/>;
      } else {
        return (
            <PostDetails post={post} comments={comments} themeType={themeType}/>
        )
      }
}


export default PostWithComments