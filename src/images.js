import React from 'react';
import { List, Edit, Create, Datagrid, TextField, ImageField, SimpleForm, DisabledInput, TextInput, ImageInput } from 'react-admin';

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
            <ImageField source="url" title="title" />
        </SimpleForm>
    </Edit>
);

export const ImageCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <ImageInput source="file" label="Image file" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);