import React from "react";
import { useState, useContext } from "react";
import { IPost, IComment } from "../Router/Router";
import ThemeContext from '../../context';
import PaperPost from "../PaperPost";
import classNames from 'classnames';
import styles from './PostDetails.module.css'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


interface PostDetailsProps {
    post?: IPost
    comments: Array<IComment>
    themeType: string
}

const PostDetails: React.FC<PostDetailsProps> = ({post, comments, themeType}) => {

    return (
        <div className = { classNames(styles.wrapper, {
            [styles.wrapperLight]: themeType === 'light',
            [styles.wrapperDark]: themeType !== 'light'
          })}>
            <Grid container className={styles.container}>
                <Grid item>
                    <Paper 
                    style={{
                        backgroundColor: themeType === 'dark' ? "#5f4b8b" : "inherit"
                    }}
                    className = { classNames(styles.postForm, {
                        [styles.formLight]: themeType === 'light',
                        [styles.formDark]: themeType !== 'light'
                    })} >
                        <div className = { classNames(styles.description, {
                            [styles.descriptionLight]: themeType === 'light',
                            [styles.descriptionDark]: themeType !== 'light'
                        })} > 
                            <div className={styles.postContent}>
                                <div className={styles.title}>{post?.title}</div>
                                <div className={styles.body}>{post?.body}</div>
                            </div>
                            
                            <div className = { classNames(styles.commentsArea, {
                                [styles.commentsLight]: themeType === 'light',
                                [styles.commentsDark]: themeType !== 'light'
                            })}>
                                <div className={styles.commentsMainText}>
                                    Comments:
                                </div>
                                {comments.map((comment, index) => {
                                    return (
                                        <div className={styles.comments} key={comment.id}>
                                            <div className={styles.commentName}>{comment.name}</div>
                                            <div className={styles.commentBody}>{comment.body}</div>
                                            <div className={styles.commentEmail}>{comment.email}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>

    )
}


export default PostDetails