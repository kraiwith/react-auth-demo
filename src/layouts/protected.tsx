import { Outlet } from 'react-router-dom';
import Nav from '../components/nav';
import Sidebar from '../components/sidebar';

export default function ProtectedLayout() {
  return (
    <div className="flex min-h-dvh">
      <Nav />
      <Sidebar />
      <div className="" style={{
        paddingTop: '70px',
        paddingLeft: '300px'
      }}>
        <Outlet />
      </div>
    </div>
  );
}
