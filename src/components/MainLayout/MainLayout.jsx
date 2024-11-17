import { Outlet } from 'react-router-dom';

import NavigationBar from 'components/NavigationBar/NavigationBar';

const MainLayout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
