const Header = ({ data }) => {
  return (
    <>
      <div className='text-yellow-50 text-center text-4xl font-semibold mb-6'>
        Trending<br></br> <span className='text-sm'>{data.data}</span>
      </div>
      <hr />
    </>
  );
};

export default Header;
