import axios from 'axios';

const Index = ({ posts }) => {
  return (
    <div>
      <h1>next home page</h1>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const { data } = res;
  return { posts: data };
};

export default Index;
