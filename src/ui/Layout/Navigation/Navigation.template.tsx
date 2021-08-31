import { NavLink } from 'react-router-dom';
import { appRoutes } from '../../../App.routes';
import "./Navigation.scss";

export const NavigationTemplate = () => {
  const navigationElements = appRoutes.map(route => (
    <NavLink exact to={route.path} key={route.name}>
      <img src={route.image} alt={route.name} />
      <span>{route.name}</span>
    </NavLink>
  ));

  return (
    <nav>
      { navigationElements }
    </nav>
  );
};