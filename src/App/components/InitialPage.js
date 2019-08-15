import React, {useContext} from 'react';
import FeatureContext from '../context/feature/featureContext';

const InitialPage = props => {
    const featureContext = useContext(FeatureContext);

    const {items} = featureContext;

    return items.map(item => <h1>{item}</h1>)
}

export default InitialPage;