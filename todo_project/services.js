const axios = require('axios');

export async function displayTask() {

    const response = await axios.get('http://localhost:4000/');
    return response.data;
}

export async function addTask(data) {
    const response = await axios.post('http://localhost:4000/', {task: data});
    return response.data;
}
export async function deleteTask(todo_id) {
    this.rows = this.rows.filter(row => row.id !== todo_id);

    const response = await axios.delete('http://localhost:4000/');
    return response.data;
}
