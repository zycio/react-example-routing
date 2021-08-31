import { Fragment } from 'react';
import { appRoutes } from '../../App.routes';

export const DesinfectantPageTemplate = () => {
  const route = appRoutes.find(route => route.name === 'Desinfectant');

  return (
    <Fragment>
      <h1>Desinfectant</h1>

      <img src={route?.image} alt={route?.name} />
    </Fragment>
  );
};