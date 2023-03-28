import Link from 'next/link';

const Index = () => (
  <div>
    <h1>next page</h1>
    <Link href='/contact' legacyBehavior>
      <a>Contact page</a>
    </Link>
  </div>
);

export default Index;
