import { Fragment } from 'react';
import { appRoutes } from '../../App.routes';

export const HazmatPageTemplate = () => {
  const route = appRoutes.find(route => route.name === 'Hazmat');

  return (
    <Fragment>
      <h1>Hazmat</h1>

      <img src={route?.image} alt={route?.name} />
    </Fragment>
  );
};