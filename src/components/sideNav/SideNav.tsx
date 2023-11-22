import React from 'react';
// styles
import styles from './sideNav.module.scss';
// router
import { NavLink } from 'react-router-dom';
import { LangBox } from '../UI/langBox/LangBox';
// i18n
import { useTranslation } from 'react-i18next';
// import svg icon
import { ReactComponent as DashboardIcon } from '../../assets/icons/home.svg';
import { ReactComponent as ScheduleIcon } from '../../assets/icons/calendar.svg';
import { ReactComponent as CoursesIcon } from '../../assets/icons/book.svg';
import { ReactComponent as GradebookIcon } from '../../assets/icons/graduation-hat.svg';
import { ReactComponent as PerformanceIcon } from '../../assets/icons/growing-chart.svg';
import { ReactComponent as AnnouncementIcon } from '../../assets/icons/announcement.svg';

const SideNav: React.FC = () => {
  const { t } = useTranslation();
  return (
    <nav className={styles.container}>
      <header className={styles.header}>
        <h1>Coligo</h1>
      </header>
      <ul>
        <li>
          <NavLink
            to='/dashboard/dashboardPage'
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? styles['active-tab']
                : styles['normal-tab']
            }
          >
            <DashboardIcon className={styles.icon} />
            <strong>{t('Dashboard')}</strong>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/dashboard/schedulePage'
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? styles['active-tab']
                : styles['normal-tab']
            }
          >
            <ScheduleIcon className={styles.icon} />
            <strong>{t('Schedule')}</strong>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/dashboard/coursesPage'
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? styles['active-tab']
                : styles['normal-tab']
            }
          >
            <CoursesIcon className={styles.icon} />
            <strong>{t('Courses')}</strong>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/dashboard/gradebookPage'
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? styles['active-tab']
                : styles['normal-tab']
            }
          >
            <GradebookIcon className={styles.icon} />
            <strong>{t('Gradebook')}</strong>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/dashboard/performancePage'
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? styles['active-tab']
                : styles['normal-tab']
            }
          >
            <PerformanceIcon className={styles.icon} />
            <strong>{t('Performance')}</strong>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/dashboard/announcementPage'
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? styles['active-tab']
                : styles['normal-tab']
            }
          >
            <AnnouncementIcon className={styles.icon} />
            <strong>{t('Announcement')}</strong>
          </NavLink>
        </li>
      </ul>
      <div className={styles['lang-box']}>
        <LangBox />
      </div>
    </nav>
  );
};

export { SideNav };
