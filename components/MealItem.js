import Link from 'next/link';
const MealItem = ({ remove, meal }) => {
  return (
    <div className='w-1/4 p-8 shadow-lg rounded-lg bg-yellow-50 mx-2 my-2 relative'>
      <span className='absolute top-1 right-1' onClick={() => remove(meal.id)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          className='fill-red-600'
        >
          <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z' />
        </svg>
      </span>
      <img
        src={meal.image}
        className='w-auto h-80 object-cover'
        alt='Chicken Salad'
      />
      <div className='text-center py-2'>
        <h3 className='text-xl font-normal'>
          {meal.name}
          <span className='px-3 font-light text-yellow-500'>
            ({meal.dish} dishes)
          </span>
        </h3>
        <p className='text-gray-500 text-base'>Herico de Porto</p>
        <Link href={`/${meal.id}`}>
          <button className='bg-yellow-500 px-4 py-2 rounded-lg text-gray-50 font-medium mt-2'>
            <a>Details</a>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MealItem;
