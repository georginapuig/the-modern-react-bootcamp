const Post = (props) => <h1>post number {props.id}</h1>;

Post.getInitialProps = async ({ query }) => {
  // /post?id=${post.id}
  console.log(query); // { id: "2" }
  return { id: query.id };
};

export default Post;

/************
 with router
*************/

// import { withRouter } from 'next/router';

// const Post = (props) => <h1>post number {props.router.query.id}</h1>;

// export default withRouter(Post);
