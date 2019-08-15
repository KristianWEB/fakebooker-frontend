import React, {useContext} from 'react';
import { Layout, Button } from 'antd';

import FeatureContext from '../context/feature/featureContext';

const { Header } = Layout;

const InitialPage = props => {
    const featureContext = useContext(FeatureContext);

    const {items} = featureContext;

    return (
        <Layout>
            <Header className='header'>
                <h1 className='title'>First ant design stuff</h1>
            </Header>
        </Layout>
    )
}

export default InitialPage;