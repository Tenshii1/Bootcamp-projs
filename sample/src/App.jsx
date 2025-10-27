import { Link } from 'react-router-dom';

  function App() {
    return (
      <div className="w-screen h-screen items-center justify-center bg-gray-500 flex">
          <div className='h-[500px] w-[400px] p-5 border-4 border-white bg-blue-200 shadow-lg items-center rounded-lg flex flex-col gap-10'>
            <h1 className='text-4xl font-bold text-orange-300 mg-10'>Login</h1>
              <input className='h-10 bg-white w-full p-4 rounded-md'
                type='text'
                placeholder='User'
              />
              <input className='h-10 bg-white w-full p-4 rounded-md'
                type='text'
                placeholder='Password'
              />
              <Link to="/Landing" className="flex justify-center items-center bg-transparent shadow-lg border-2 text-blue-400 w-full h-10  p-2 rounded-md focus:outline-none hover:bg-blue-400 hover:text-white font-bold ml-1 transition duration-300"
                >Login</Link>
              <h3 className='text-black text-sm'>
                Don't have an account?
                <Link to="/Landing" className="text-red-400 hover:text-red-100 font-bold ml-1 transition duration-300"
                >Sign Up</Link>
              </h3>
              
          </div>
      </div>
    )
  }

  export default App