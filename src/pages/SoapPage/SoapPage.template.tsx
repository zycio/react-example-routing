import { Fragment } from 'react';
import { appRoutes } from '../../App.routes';

export const SoapPageTemplate = () => {
  const route = appRoutes.find(route => route.name === 'Soap');

  return (
    <Fragment>
      <h1>Soap</h1>

      <img src={route?.image} alt={route?.name} />
    </Fragment>
  );
};