import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { ArticleList } from './articles';
import { authorizedHttpClient, authClient } from './authClient';

const App = () => (
    <Admin authClient={authClient} title="Jalkapallo" restClient={jsonServerRestClient('http://localhost:3001', authorizedHttpClient)}>
        <Resource name="articles" list={ArticleList} />
    </Admin>
);

export default App;