import { Article } from '@components/organisms/artical';
import { Header } from '@components/organisms/header';

const Home = () => {
  return (
   <>
    <div className='page-body'>
    <Header />
    <Article />
    </div>
   </>
  );
};

export default Home;
