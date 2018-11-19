const convertFileToBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});

export const addUploadFeature = requestHandler => (type, resource, params) => {
    if (type === 'UPDATE' && resource === 'posts') {
        if (params.data.picture) {

            return convertFileToBase64(params.data.picture)
                .then(base64Picture => requestHandler(type, resource, {
                    ...params,
                    data: {
                        ...params.data,
                        file: base64Picture,
                    },
                }));
        }
    }
    // for other request types and resources, fall back to the default request handler
    return requestHandler(type, resource, params);
};