import MealItem from './MealItem';
import { useRouter } from 'next/router';

const MealList = (props) => {
  const router = useRouter();

  const remove = (id) => {
    fetch(`https://my-json-server.typicode.com/staystrongbg/demo/meals/${id}`, {
      method: 'DELETE',
    }).then(() => router.replace('/'));
  };
  return (
    <div className='flex flex-wrap justify-center items-center'>
      {props.meals.map((meal) => (
        <MealItem remove={remove} meal={meal} key={meal.id} />
      ))}
    </div>
  );
};

export default MealList;
