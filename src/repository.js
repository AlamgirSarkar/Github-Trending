const Repository = (props) => {
  const data = props.data;
  return (
    <>
      <div className='p-2'>
        <div className='flex'>
          <div className='m-3'>
            {' '}
            <svg
              aria-hidden='true'
              height='16'
              viewBox='0 0 16 16'
              version='1.1'
              width='16'
              data-view-component='true'
              class='octicon octicon-repo mr-1 color-fg-muted text-yellow-50'
            >
              <path
                fill-rule='evenodd'
                d='M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z'
              ></path>
            </svg>
          </div>

          <a href={data.url} className='text-slate-400 text-2xl font-semibold'>
            {' '}
            {`${data.username}/${data.repositoryName}`}
          </a>
          <div className='m-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
              />
            </svg>
          </div>
        </div>
        <p className='text-yellow-50'>{data.description}</p>
        <div className='flex space-x-6'>
          <h5 className='text-yellow-50'>{data.language}</h5>
          <div className='flex'>
            {' '}
            <div className='mt-1'>
              <svg
                aria-label='star'
                role='img'
                height='16'
                viewBox='0 0 16 16'
                version='1.1'
                width='16'
                data-view-component='true'
                class='octicon octicon-star'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z'
                ></path>
              </svg>
            </div>
            <h5 className='text-yellow-50'>{data.totalStars}</h5>
          </div>
          <div className='flex'>
            <div className='mt-1'>
              <svg
                aria-label='fork'
                role='img'
                height='16'
                viewBox='0 0 16 16'
                version='1.1'
                width='16'
                data-view-component='true'
                class='octicon octicon-repo-forked'
              >
                <path
                  fill-rule='evenodd'
                  d='M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z'
                ></path>
              </svg>
            </div>

            <h5 className='text-yellow-50'>{data.forks}</h5>
          </div>
          <div className='flex space-x-4  text-slate-200'>
            Built by
            {data.builtBy.map((data) => (
              <img
                data-tooltip-target='tooltip-jese'
                class='w-7 h-7 rounded-full'
                src={data.avatar}
                alt={data.url}
              />
            ))}
          </div>
          <div className='flex'>
            {' '}
            <div className='mt-1'>
              <svg
                aria-label='star'
                role='img'
                height='16'
                viewBox='0 0 16 16'
                version='1.1'
                width='16'
                data-view-component='true'
                class='octicon octicon-star'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z'
                ></path>
              </svg>
            </div>
            <h5 className='float-right text-yellow-50'>
              {data.starsSince} stars today
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Repository;
