import React from 'react';
import { List, Edit, Datagrid, TextField, SimpleForm, DisabledInput, TextInput, LongTextInput } from 'react-admin';

export const ArticleList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export const ArticleEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const ArticleCreate = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);