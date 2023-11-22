import React, { useEffect, Suspense } from 'react';
// router
import { Routes, Route } from 'react-router-dom';
// readux
import { useSelector } from 'react-redux';
// i18n
import { changeLanguage } from './i18n';
import { useTranslation } from 'react-i18next';
// types
import { LangAttribute } from './types/customTypes';
// styles
import styles from './App.module.scss';
import RequireAuth from './hoc/RequireAuth';
// Home Page
const HomePage = React.lazy(() => import('./pages/home/HomePage'));

// Dashboard Pages
const DashboardBase = React.lazy(() => import('./pages/dashboard'));
const DashboardPage = React.lazy(
  () => import('./pages/dashboard/dashboardPage')
);
const SchedulePage = React.lazy(() => import('./pages/dashboard/schedulePage'));
const CoursesPage = React.lazy(() => import('./pages/dashboard/coursePage'));
const GradebookPage = React.lazy(
  () => import('./pages/dashboard/gradebookPage')
);
const PerformancePage = React.lazy(
  () => import('./pages/dashboard/performancePage')
);
const AnnouncementPage = React.lazy(
  () => import('./pages/dashboard/announcPage')
);

function App() {
  const { t } = useTranslation();
  const lang: LangAttribute = useSelector((state: any) => state.mainSlice.lang);
  useEffect(() => {
    changeLanguage(lang);
  }, [lang]);
  return (
    <div className={styles['App']}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/dashboard'
            element={<RequireAuth component={DashboardBase} />}
          >
            <Route path='dashboardPage' element={<DashboardPage />} />
            <Route path='schedulePage' element={<SchedulePage />} />
            <Route path='coursesPage' element={<CoursesPage />} />
            <Route path='gradebookPage' element={<GradebookPage />} />
            <Route path='performancePage' element={<PerformancePage />} />
            <Route path='announcementPage' element={<AnnouncementPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
