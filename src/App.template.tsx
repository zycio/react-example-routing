import { Suspense } from 'react';
import { Layout } from './ui/Layout';
import classes from './App.module.scss';

export const AppTemplate = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={classes.AppContainer}>
        <Layout />
      </div>
    </Suspense>
  );
};