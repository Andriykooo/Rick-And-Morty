import Image from 'next/dist/client/image';

const ErrorPage = () => {
  return (
    <div>
      <Image src='/./images/error.jpg' alt='error 404' layout='fill' />
    </div>
  );
};

export default ErrorPage;
