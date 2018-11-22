import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerRestClient from 'ra-data-json-server';

import { ArticleList, ArticleEdit, ArticleCreate } from './articles';
import { ImageList, ImageEdit, ImageCreate } from './images';
import { authorizedHttpClient, authProvider } from './authClient';
import { addUploadFeature } from './fileUpload';

const restProvider = addUploadFeature(jsonServerRestClient('http://localhost:3001', authorizedHttpClient));

const App = () => (
    <Admin authProvider={authProvider} title="Jalkapallo" dataProvider={restProvider}>
        <Resource name="articles" list={ArticleList} edit={ArticleEdit} create={ArticleCreate}/>
        <Resource name="images" list={ImageList} edit={ImageEdit} create={ImageCreate}/>
    </Admin>
);

export default App;