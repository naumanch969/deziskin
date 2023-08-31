import { Navbar, Sidebar } from '../components'
import { useState } from 'react'
import { rawProducts, rawUsers } from '../data/data'

const AppWrapper = ({ Component }) => {
    const [showSidebar, setShowSidebar] = useState(false)

    const [products, setProducts] = useState(rawProducts)
    const [users, setUsers] = useState(rawUsers)


    return (
        <>
            <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <div style={{ height: "calc(100vh - 4rem)" }} className='flex w-full ' >
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                <Component products={products} setProducts={setProducts} users={users} setUsers={setUsers} />
            </div>
        </>
    )
}

export default AppWrapper