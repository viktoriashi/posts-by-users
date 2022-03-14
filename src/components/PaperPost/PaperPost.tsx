import React from "react";
import {ThemeType} from "../../App";
import { IPost, IUser } from "../Router/Router";
import ModalWindow from "../Modal/ModalWindow";
import styles from './PaperPost.module.css'
import classNames from 'classnames';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom';


interface PaperPostProps {
    post?: IPost
    user?: IUser
    isModalOpen: boolean
    toggleModal(): void
    themeType: string
}


const PaperPost: React.FC<PaperPostProps> = ({post, user, isModalOpen, toggleModal, themeType}) => {

    return (
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
                <Link to={`/posts/${post?.id}`} className={styles.link}>
                    <div className="post__content">
                        <div className={styles.title}>{post?.title}</div>
                        <div className={styles.body}>{post?.body}</div>
                    </div>
                </Link>
                
                <div className = { classNames(styles.author, {
                    [styles.authorLight]: themeType === 'light',
                    [styles.authorDark]: themeType !== 'light'
                })}>
                    <div className={styles.authorMaintext}>
                        Author: 
                        <a className={styles.authorText} onClick={toggleModal}>
                            {user?.name}
                        </a>
                    </div>
                    { user &&
                    <ModalWindow author={user} isOpen={isModalOpen} onClose={toggleModal}></ModalWindow>
                    }
                </div>
            </div>
        </Paper> 
    )
}



export default PaperPost