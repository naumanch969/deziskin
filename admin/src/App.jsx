import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { Home, Users, User, NewUser, Products, Product, NewProduct, Login, Register, ToBeCreated } from './pages'
import { AppWrapper } from './wrapper'
import { useSelector } from 'react-redux'

const App = () => {

  const { currentUser } = useSelector(state => state.user)

  return (
    <div className='w-screen h-screen overflow-hidden ' >

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      {
        currentUser?.isAdmin
          ?
          <div className='bg-lightBlue flex flex-col gap-[1rem] justify-center items-center w-screen h-screen ' >
            <span className='text-[32px] font-semibold ' >Only admin can access this page</span>
            <Link to='/login' className='text-[18px] bg-darkBlue px-[1rem] py-[8px] rounded-[4px] ' >Login</Link>
            <Link to='/' className='underline text-[18px] ' >Go Back</Link>
          </div>
          :
          <Routes>
            <Route path='/' exact element={<AppWrapper Component={Home} />} />
            <Route path='/home' element={<Navigate to='/' />} />
            <Route path='/users' element={<AppWrapper Component={Users} />} />
            <Route path='/user/:id' element={<AppWrapper Component={User} />} />
            <Route path='/newUser' element={<AppWrapper Component={NewUser} />} />
            <Route path='/products' element={<AppWrapper Component={Products} />} />
            <Route path='/product/:id' element={<AppWrapper Component={Product} />} />
            <Route path='/newProduct' element={<AppWrapper Component={NewProduct} />} />
            <Route path='/analytics' element={<AppWrapper Component={ToBeCreated} />} />
            <Route path='/sales' element={<AppWrapper Component={ToBeCreated} />} />
            <Route path='/transactions' element={<AppWrapper Component={ToBeCreated} />} />
            <Route path='/reports' element={<AppWrapper Component={ToBeCreated} />} />
            <Route path='/mail' element={<AppWrapper Component={ToBeCreated} />} />
            <Route path='/feedback' element={<AppWrapper Component={ToBeCreated} />} />
            <Route path='/messages' element={<AppWrapper Component={ToBeCreated} />} />
            <Route path='/manage' element={<AppWrapper Component={ToBeCreated} />} />
          </Routes>

      }
    </div>
  )
}

export default App;