import NavigationBar from 'components/NavigationBar/NavigationBar';

import s from '../MainLayout/MainLayout.module.css';

const MainLayout = () => {
  return (
    <div className={s.wrapperMainLayout}>
      <NavigationBar />
    </div>
  );
};

export default MainLayout;
