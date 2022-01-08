const ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

const wrapCallInPromise = (promise) => {
  let status = "pending"; // status of execution
  let result; // data to be returned
  let suspender = promise
    .then((resp) => {
      status = "success";
      result = resp;
    })
    .catch((err) => {
      status = "error";
      result = err;
    });

  return {
    readData() {
      if (status === "pending") {
        throw suspender; // suspend the component by throwing the suspender
      } else if (status === "success") {
        return result; // return the data successfully fetched
      } else if (status === "error") {
        throw result; // throw the error and suspend the component
      }
    },
  };
};

export const getPosts = () => {
  return wrapCallInPromise(fetch(ENDPOINT).then((res) => res.json()));
};
