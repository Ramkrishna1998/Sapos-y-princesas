import { ExampleComponent } from '../atoms/ExampleComponent';

const Home = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-blue-50 text-9xl text-sky-500'>
      Home
      <ExampleComponent />
    </div>
  );
};

export default Home;
