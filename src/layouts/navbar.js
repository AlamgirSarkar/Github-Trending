const Navbar = () => {
  return (
    <>
      <nav className=' border-gray-200 px-2 sm:px-4 py-2.5 rounded-lg dark:bg-gray-900 bg-slate-900'>
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <div class='flex items-left'>
            <button
              type='button'
              class='text-yellow-50 bg-regal-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-l-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            >
              <a href='/repository'> Repositories</a>
            </button>
            <button
              type='button'
              class='text-yellow-50 bg-regal-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-r-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            >
              <a href='/developer'>Developers</a>
            </button>
          </div>
          <div className='flex space-x-6'>
            <div className='flex'>
              <a className='text-yellow-50'>Spoken Language</a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 text-yellow-50'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </div>
            <div className='flex'>
              <a className='text-yellow-50'>Language</a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 text-yellow-50'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </div>
            <div className='flex'>
              <a className='text-yellow-50'>Date Range</a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 text-yellow-50'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
