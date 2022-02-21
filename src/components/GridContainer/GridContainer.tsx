import React, { useContext } from "react";
import styles from './GridContainer.module.css'
import Grid from '@mui/material/Grid';
import {IPost, IUser} from '../../App';
import Post from '../Post';


interface GridProps {
    posts: Array<IPost>
    users: Array<IUser|undefined>
}

const GridContainer: React.FC<GridProps> = ({posts, users}) => {
    
    return (
        <Grid container maxWidth="xl" className={styles.container}>
            { posts.map((post, index) => {
                let user = users[index] 
                return (    
                    <Grid item key={post.id} m={'15px'}>
                        <Post post={post} user={user}></Post>
                    </Grid>
                )
            })} 
        </Grid>
    )
}



export default GridContainer;