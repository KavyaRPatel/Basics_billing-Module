const axios = require('axios');

export async function displayTodos() {

    const response = await axios.get('/');
    return response.data;
}

export async function addTask(data) {
    const response = await axios.post('http://localhost:4000/', {task: data});
    return response.data;
}
