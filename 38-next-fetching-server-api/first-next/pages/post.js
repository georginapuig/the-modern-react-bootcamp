const Post = (props) => <h1>post number {props.id}</h1>;

Post.getInitialProps = async ({ query }) => {
  // /post?id=${post.id}
  console.log(query); // { id: "2" }
  return { id: query.id };
};

export default Post;
