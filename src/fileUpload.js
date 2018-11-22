const convertFileToBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});

export const addUploadFeature = requestHandler => (type, resource, params) => {
    if ((type === 'UPDATE' || type === 'CREATE') && resource === 'images') {
        if (params.data.file) {
            return convertFileToBase64(params.data.file)
                .then(base64Picture => requestHandler(type, resource, {
                    ...params,
                    data: {
                        ...params.data,
                        body: base64Picture,
                        filename: params.data.file.rawFile.name,
                    },
                }));
        }
    }
    return requestHandler(type, resource, params);
};