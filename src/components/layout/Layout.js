import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import { Suspense } from 'react';
import { SharedLayout } from './Layuot.styled';

const Layout = () => {
  return (
    <SharedLayout>
      <Header />
      <main>
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </SharedLayout>
  );
};

export default Layout;
