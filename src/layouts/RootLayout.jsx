import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar.jsx';

function RootLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default RootLayout;