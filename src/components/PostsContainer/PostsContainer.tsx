import React, { useContext } from "react";
import { IPost, IUser } from "../../App";
import Post from '../Post'
import './PostsContainer.css'
import ThemeContext from '../../context';


interface PostsContainerProps {
    posts: Array<IPost>
    users: Array<IUser>
    amount: number
}

const PostsContainer: React.FC<PostsContainerProps> = ({posts, users, amount}) => {

    const {themeType, setThemeType} = useContext(ThemeContext);

    return (
        <div className="post-container">
            { posts.slice(0, amount).map(post => {
                let user: IUser|undefined = users.find(user => user.id === post.userId)
                return (
                    <div className={`post-form ${themeType === 'light' ? "post-form-light" : "post-form-dark"}`} key={post.id}>
                        <Post post={post} user={user}></Post>
                    </div>
                )
            })}
        </div>
    )
}



export default PostsContainer