import React, { useCallback, useContext, useState } from "react";
import { IPost, IUser } from "../../App";
import GridContainer from '../GridContainer';
const _ = require('lodash')


interface PostsContainerProps {
    posts: Array<IPost>
    users: Array<IUser>
    amount: number
}


const PostsContainer: React.FC<PostsContainerProps> = ({posts, users, amount}) => {

    const proccessPosts = (posts: Array<IPost>, amount: number) => {
        return posts.slice(0, amount) 
    };

    const proccessUsers = (posts: Array<IPost>, users: Array<IUser>) => {
        const newUsers: Array<IUser | undefined> = [];
        posts.forEach( post => {
            let user: IUser|undefined = users.find(user => user?.id === post.userId);
            newUsers.push(user);
        });
        return newUsers
    };

    return (
        <GridContainer posts = {proccessPosts(posts, amount)} users = { proccessUsers(proccessPosts(posts, amount), users)}/>
    )
}

export default PostsContainer