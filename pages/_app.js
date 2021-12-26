import '../public/style/global.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className='max-w-10xl mx-auto  '>
      <Component {...pageProps} />
    </div>
  );
};
export default MyApp;
