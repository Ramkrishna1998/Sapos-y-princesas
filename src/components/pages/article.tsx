// import { Article } from '@components/organisms/artical';
import { Article } from '@components/organisms/artical';
import { Footer } from '@components/organisms/footer';
import { Header } from '@components/organisms/header';

const ArticlePage = () => {
  return (
   <>
    <div className='page-body'>
    <Header />
    <Article />
    <Footer />
    </div>
   </>
  );
};

export default ArticlePage;
