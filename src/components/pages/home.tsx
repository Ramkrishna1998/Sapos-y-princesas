// import { Article } from '@components/organisms/artical';
import { Footer } from '@components/organisms/footer';
import { Header } from '@components/organisms/header';
import { HomeInner } from '@components/organisms/homeinner';

const Home = () => {
  return (
    <>
      <div className='page-body'>
        <Header />
        {/* <Article /> */}
        <HomeInner />
        <Footer />
      </div>
    </>
  );
};

export default Home;
