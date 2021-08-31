import { Component } from 'react';
import { DynamicLoaderTemplate } from './DynamicLoader.template';
import { DynamicloaderProps } from './DynamicLoader.model';

export class DynamicLoader extends Component<DynamicloaderProps> {
    shouldComponentUpdate(nextProps: DynamicloaderProps) {
        return this.props.component !== nextProps.component;
    }

    render() {
        return DynamicLoaderTemplate(this.props);
    }
}