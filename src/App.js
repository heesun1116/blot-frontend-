import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route } from 'react-router';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>앙's 블로구</title>
      </Helmet>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      {/* username을 파라미터로 읽을 수 있음 */}
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
    </>
  );
};

export default App;
