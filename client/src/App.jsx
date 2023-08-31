import { Navbar, Announcement } from './components'
import { Home as Component, TravelKits, BestSelling, Register, Login, About, Product, FrontPage, Contact } from './pages'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const App = () => {

    const { loggedUser: user } = useSelector(state => state.user)

    return (
        <div className='bg-lighter-brown ' >
            <Announcement />
            <Navbar />

            <Routes  >
                <Route path='/' element={<Component path='' />} />
                {/* pages */}
                <Route path='/pages/contact-us' element={<Contact />} />
                <Route path='/pages/return-policy' element={<Component path='' />} />
                <Route path='/pages/help-faq' element={<Component path='' />} />
                <Route path='/pages/job-openings' element={<Component path='' />} />
                <Route path='/pages/about-the-brand' element={<About />} />
                <Route path='/pages/auto-replenish-faq' element={<Component path='' />} />
                <Route path='/pages/accessibility' element={<Component path='' />} />
                {/* collections */}
                <Route path='/collections/frontpage' element={<FrontPage path='' />} />
                <Route path='/collections/travel-kits' element={<TravelKits />} />
                <Route path='/collections/best-sellers' element={<BestSelling />} />
                <Route path='/collections/home-accessories' element={<Component path='' />} />
                {/* products */}
                <Route path='/product/:id' element={<Product />} />
                <Route path='/products/gift-card' element={<Component path='' />} />
                <Route path='/products/error-in-payment' element={<Component path='' />} />
                {/* account */}
                <Route path='/account/login' element={ <Login />} />
                <Route path='/account/register' element={<Register />} />
                <Route path='/account/challenge' element={<Component />} /> {/* recaptcha */}
                {/* policy */}
                <Route path='/policies/shipping-policy' element={<Component path='' />} />
                <Route path='/policies/privacy-policy' element={<Component path='' />} />
                <Route path='/policies/terms-of-service' element={<Component path='' />} />
            </Routes>

        </div>
    )
}

export default App