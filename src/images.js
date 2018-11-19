import React from 'react';
import { List, Edit, Datagrid, TextField, SimpleForm, DisabledInput, TextInput, LongTextInput } from 'react-admin';

export const ImageList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="url" />
        </Datagrid>
    </List>
);

export const ImageEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <DisabledInput source="filename" />
            <DisabledInput source="url" />
        </SimpleForm>
    </Edit>
);

export const ImageCreate = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" />
            
        </SimpleForm>
    </Edit>
);