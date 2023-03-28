import Link from 'next/link';

const Navbar = () => {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    padding: '1rem',
  };

  return (
    <div style={styles}>
      <Link href='/' legacyBehavior>
        <a>Home page</a>
      </Link>
      <Link href='/about' legacyBehavior>
        <a>About page</a>
      </Link>
      <Link href='/contact' legacyBehavior>
        <a>Contact page</a>
      </Link>
    </div>
  );
};

export default Navbar;
