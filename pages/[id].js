export const getStaticPaths = async () => {
  const response = await fetch(
    'https://my-json-server.typicode.com/staystrongbg/demo/meals'
  );
  const data = await response.json();

  const paths = data.map((meal) => {
    return {
      params: { id: meal.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    'https://my-json-server.typicode.com/staystrongbg/demo/meals' + id
  );
  const data = await response.json();
  return {
    props: {
      meal: data,
    },
  };
};

const Details = ({ meal }) => {
  console.log(meal);
  return (
    <div className='flex flex-col h-2/4 w-full'>
      <img className='object-cover h-full w-full' src={meal.image} alt='' />
      <h1 className='text-7xl font-bold text-gray-700 capitalize text-center my-10'>
        {meal.name}
      </h1>
      <div className='flex justify-center align-middle'>
        <h3 className='text-3xl text-red-400'>by {meal.chef} | </h3>
        <h3 className='text-3xl text-red-600'> {meal.dish}</h3>
      </div>
    </div>
  );
};
export default Details;
