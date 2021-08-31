import { lazy } from 'react';
import { DynamicloaderProps } from './DynamicLoader.model';

export const DynamicLoaderTemplate = (props: DynamicloaderProps) => {
    const LazyComponent = lazy(() => import(`../../pages/${props.component}/${props.component}`));
    
    return (
        <LazyComponent />
    );
};