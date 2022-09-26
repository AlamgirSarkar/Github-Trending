import Header from './layouts/header';
import Navbar from './layouts/navbar';
import developer from './data/developer.json';
const Developer = () => {
  const baseline = {
    data: 'These are the developers building the hot tools today',
  };
  return (
    <>
      <div className='bg-slate-800'>
        <Header data={baseline} />
        <div className='grid grid-cols-1 divide-y m-20 border border-slate-600 rounded-lg'>
          <Navbar />
          {developer.map((data) => (
            <div className='grid grid-cols-4 gap-4 margin-left-auto p-2'>
              <div className='flex space-x-4'>
                <span className='pt-2 text-yellow-50'>{data.rank}</span>
                <img
                  data-tooltip-target='tooltip-jese'
                  class='w-10 h-10 rounded-full'
                  src={data.avatar}
                />
                <div>
                  <a
                    className='text-blue-300 text-xl font-semibold'
                    href={data.url}
                  >
                    {data.name}
                  </a>
                  <div className='text-yellow-50'>{data.username}</div>
                </div>
              </div>

              <div className='grid cols-1'>
                <div className='flex'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5 mt-1 text-red-900'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z'
                    />
                  </svg>
                  <h7 className='text-yellow-50'>Popular repo</h7>
                </div>
                <div className='flex'>
                  <svg
                    aria-hidden='true'
                    height='16'
                    viewBox='0 0 16 16'
                    version='1.1'
                    width='16'
                    data-view-component='true'
                    class='octicon octicon-repo mr-1 color-fg-muted text-yellow-50 m-1'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z'
                    ></path>
                  </svg>
                  <a
                    href={data.popularRepository.url}
                    className='text-blue-300 font-semibold'
                  >
                    {data.popularRepository.repositoryName}
                  </a>
                </div>
                <div>{data.popularRepository.description}</div>
              </div>
              <div></div>
              <div className='flex space-x-2'>
                <div>
                  <button class='bg-slate-900 hover:bg-slate-700 text-yellow-50 font-bold py-2 px-4 rounded flex space-x-2 h-8 text-xs'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-4 h-4 text-red-900'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                      />
                    </svg>
                    <span>Sponsor</span>
                  </button>
                </div>
                <div>
                  <button class='bg-slate-900 hover:bg-slate-700 text-yellow-50 font-bold py-2 px-4 rounded text-xs'>
                    Follow
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Developer;
