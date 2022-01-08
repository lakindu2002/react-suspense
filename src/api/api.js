const ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = () => {
  return fetch(ENDPOINT).then((res) => res.json());
};
