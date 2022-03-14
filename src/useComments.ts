import { useState, useEffect } from "react";
import { IComment } from "./components/Router/Router";

const useComments = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [errorComments, setError] = useState(null);
  const [isLoadedComments, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setComments(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  return {comments, errorComments, isLoadedComments};
};

export default useComments;