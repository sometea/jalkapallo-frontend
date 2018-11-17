import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerRestClient from 'ra-data-json-server';

import { ArticleList, ArticleEdit, ArticleCreate } from './articles';
import { authorizedHttpClient, authProvider } from './authClient';

const App = () => (
    <Admin authProvider={authProvider} title="Jalkapallo" dataProvider={jsonServerRestClient('http://localhost:3001', authorizedHttpClient)}>
        <Resource name="articles" list={ArticleList} edit={ArticleEdit} create={ArticleCreate}/>
    </Admin>
);

export default App;