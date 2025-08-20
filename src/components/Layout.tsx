
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
     <div style={{ maxWidth: 960, margin: '24px auto', padding: 16 }}>
    <h1>Products</h1>
    <nav style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
      <Link to="/">List</Link>
      <Link to="/products/new">Create</Link>
    </nav>
    <Outlet />
  </div>
  )
}

export default Layout