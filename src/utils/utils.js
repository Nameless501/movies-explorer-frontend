export function handleResponseCheck(response) {
    return response.ok ? response.json() : Promise.reject(response.status);
}