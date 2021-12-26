import MealList from '../components/MealList';
import Link from 'next/link';

const Home = (props) => {
  console.log(props);
  return (
    <>
      <h1 className='text-7xl text-center my-20'>Recepti</h1>
      <div className='flex items-center justify-center my-20'>
        <Link href='/new-meal '>
          <a>
            <button className='bg-red-500 px-4 py-2 rounded-lg mx-0 my-0 text-gray-50 font-medium mt-2'>
              add new meal
            </button>
          </a>
        </Link>
      </div>
      <MealList meals={props.mealList} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await fetch(
    'https://my-json-server.typicode.com/staystrongbg/demo/meals'
  );
  const data = await response.json();

  return {
    props: {
      mealList: data.map((meal) => ({
        id: meal.id.toString(),
        name: meal.name,
        image: meal.image,
        dish: meal.dish,
        chef: meal.chef,
      })),
    },
  };
}
