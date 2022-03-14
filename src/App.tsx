import React, { useContext } from 'react';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PostsContainer from './components/PostsContainer';
import ThemeContext from './context';
import Button from './components/Button';
import classNames from 'classnames';
import styles from './index.module.css';
import { IPost, IUser } from "./components/Router/Router";


export type ThemeType = 'light' | 'dark'


interface AppProps {
  posts: Array<IPost>
  users: Array<IUser>
}

const App: React.FC<AppProps> = ({posts, users}) => {

  const navigate = useNavigate()
    
  let queryParams = new URLSearchParams(window.location.search);
  const defaultPostAmount = Number(queryParams.get("limit")) || 5;

  const [postAmount, setPostAmount] = useState<number>(defaultPostAmount);

  const changePostAmount = useCallback(() => {
    navigate({
      search: `?limit=${postAmount+5}`,
    });
  
    setPostAmount((prevState) => prevState + 5);

  }, [postAmount]);
      
  const {themeType, setThemeType} = useContext(ThemeContext);

    return (
        <div className = { classNames(styles.wrapper, {
            [styles.wrapperLight]: themeType === 'light',
            [styles.wrapperDark]: themeType !== 'light'
          })}>
          <div className={styles.themeButtons}>
            <Button type='primary' onClick={() => setThemeType('light')}>
              Light theme
            </Button>
            <Button type='secondary' onClick={() => setThemeType('dark')}>
              Dark theme
            </Button>
          </div>
          <PostsContainer posts={posts} users={users} amount={postAmount}> </PostsContainer>
          <Button type='default' onClick={changePostAmount}>Show more</Button>
        </div>
    );
}

export default App;
