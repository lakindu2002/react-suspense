export const Posts = (props) => {
  const { resources } = props;
  const posts = resources.readData();
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <span>Title: {post.title}</span>
          <br />
          <span>Body: {post.body}</span>
          <hr key={post.id} />
        </div>
      ))}
    </>
  );
};
