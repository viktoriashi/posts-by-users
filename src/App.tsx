import React, { useContext } from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PostsContainer from './components/PostsContainer';
import ThemeContext from './context';
import Button from './components/Button';
import Loader from './components/Loader';
import classNames from 'classnames';
import styles from './index.module.css';

export type ThemeType = 'light' | 'dark'

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}


const App: React.FC = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [users, setUsers] = useState<IUser[]>([]);
  const [items, setItems] = useState<IPost[]>([]);
  

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


  useEffect(() => {
      let urls = ['https://jsonplaceholder.typicode.com/posts',
                  'https://jsonplaceholder.typicode.com/users']
      
      let requests = urls.map(url => fetch(url));

      Promise.all(requests)
        .then(responses => Promise.all(responses.map(r => r.json())))
        .then(results => {
          setItems(results[0]);
          setUsers(results[1]);
          setIsLoaded(true);
        }).catch((error) => {
          setIsLoaded(true);
          setError(error);
        });
  }, [])

  if (error) {
    return <div>Ошибка</div>;
  } else if (!isLoaded) {
    return <Loader/>;
  } else {
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
          <PostsContainer posts={items} users={users} amount={postAmount}> </PostsContainer>
          <Button type='default' onClick={changePostAmount}>Show more</Button>
        </div>
    );
  }
}

export default App;
