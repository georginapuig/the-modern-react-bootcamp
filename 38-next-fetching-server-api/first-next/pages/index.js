import axios from 'axios';
import Link from 'next/link';

const Index = ({ posts }) => {
  return (
    <div>
      <h1>next home page</h1>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/post?id=${post.id}`}>{post.title}</Link>
        </li>
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
