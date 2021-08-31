import { Fragment } from 'react';
import { Content } from './Content';
import { Navigation } from './Navigation';

export const LayoutTemplate = () => (
    <Fragment>
        <Content />
        <Navigation />
    </Fragment>
);