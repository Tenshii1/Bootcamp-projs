import { Link } from 'react-router-dom';

  function App() {
    return (
      <div className="w-screen h-screen items-center justify-center bg-[#1e293b] flex">
          <div className='h-[500px] w-[400px] p-5 border-4 border-white bg-[#334155] shadow-lg items-center rounded-lg flex flex-col gap-10'>
            <h1 className='text-4xl font-bold text-[#38bdf8] mg-10'>Login</h1>
              <input className='h-10 bg-white w-full p-4 rounded-md'
                type='text'
                placeholder='User'
              />
              <input className='h-10 bg-white w-full p-4 rounded-md'
                type='password'
                placeholder='Password'
              />
              <Link to="/Landing" className="flex justify-center items-center bg-transparent shadow-sm border-2 text-[#14b8a6] w-full h-10 
              p-2 rounded-md focus:outline-none hover:bg-[#0d9488] hover:text-white hover:shadow-lg font-bold ml-1 transition duration-300"
                >Login</Link>
              <h3 className='text-[#e2e8f0]'>
                Don't have an account?
                <Link to="/Landing" className="text-[#f59e0b] hover:text-[#0ea5e9] font-bold ml-1 transition duration-300"
                >Sign Up</Link>
              </h3>
              
          </div>
      </div>
    )
  }

  export default App