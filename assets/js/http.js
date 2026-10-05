const toJson = (objet) => JSON.stringify(objet);

const runPost = async (uri, data) => {
    startLoading();
    const response = await fetch(API_URL.concat(`/${uri}`), {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: toJson(data)
    });
    stopLoading();
    return response.ok;
}

const runPut = async (uri, data) => {
    startLoading();
    const response = await fetch(API_URL.concat(`/${uri}`), {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: toJson(data)
    });
    stopLoading();
    return response.ok;
}

const runGet = async (uri) => {
    startLoading()
    const response = await fetch(API_URL.concat(`/${uri}`));
    if(!response.ok) {
        stopLoading()
        return false;
    }
    stopLoading();
    return await response.json();
}

const runDelete = async (uri) => {
    if(confirm("Tem certeza que deseja excluir?")) {
        startLoading();
        const response = await fetch(API_URL.concat(`/${uri}`), {
            headers: { 'Content-Type': 'application/json' },
            method: 'DELETE'
        });
        stopLoading();
        return response.ok;
    }
    return false;
}