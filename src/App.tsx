import React, { useContext } from 'react';
import { useState, useEffect, useCallback } from 'react';
import PostsContainer from './components/PostsContainer';
import ThemeContext from './context';
import Button from './components/Button';

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
  
  const [postAmount, setPostAmount] = useState<number>(5);

  const changePostAmount = useCallback(() => {
    setPostAmount((prevState) => prevState + 5);
  }, []);
      
  const {themeType, setThemeType} = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
          console.log(result)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка</div>;
  } else if (!isLoaded) {
    return (
      <div className='loading-bar'>
        <div className='loading-bar__round loading-bar__round-green'/>
        <div className='loading-bar__round loading-bar__round-red'/>
        <div className='loading-bar__round loading-bar__round-yellow'/>
        <div className='loading-bar__round loading-bar__round-aqua'/>
        <div className='loading-bar__round loading-bar__round-lightgray'/>
        <div className='loading-bar__round loading-bar__round-gray'/>
      </div>
      );
  } else {
    return (
        <div className={`wrapper ${themeType === 'light' ? "wrapper-light" : "wrapper-dark"}`}>
          <div className='theme-buttons'>
            <Button type='light-theme' onClick={() => setThemeType('light')}>
              Light theme
            </Button>
            <Button type='dark-theme' onClick={() => setThemeType('dark')}>
              Dark theme
            </Button>
          </div>
          <PostsContainer posts={items} users={users} amount={postAmount}> </PostsContainer>
          <Button type='show-more' onClick={changePostAmount}>Show more</Button>
        </div>
    );
  }
}

export default App;
