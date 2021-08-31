import { Fragment } from 'react';
import { appRoutes } from '../../App.routes';

export const PaperPageTemplate = () => {
  const route = appRoutes.find(route => route.name === 'Paper');

  return (
    <Fragment>
      <h1>Paper</h1>

      <img src={route?.image} alt={route?.name} />
    </Fragment>
  );
};