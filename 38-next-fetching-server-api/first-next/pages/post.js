import axios from 'axios';

const Post = ({ id, comments }) => {
  return (
    <div>
      <h1>comment for post number {id}</h1>
      {comments.map((comment) => (
        <Comment {...comment} key={comment.id} />
      ))}
    </div>
  );
};

const Comment = ({ email, body }) => (
  <div>
    <h5>{email}: </h5>
    <p>{body}</p>
  </div>
);

Post.getInitialProps = async ({ query }) => {
  console.log(query);

  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const { data } = res;
  return { ...query, comments: data };
};

export default Post;

/************
 with router
*************/

// import { withRouter } from 'next/router';

// const Post = (props) => <h1>post number {props.router.query.id}</h1>;

// export default withRouter(Post);
