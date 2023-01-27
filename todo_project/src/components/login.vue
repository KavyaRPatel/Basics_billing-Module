<template>
    <div>

        <h2>Login</h2>
        <form class="form-border" v-on:submit.prevent="checkUser">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" v-model="username" name="username" class="form-control" placeholder="Enter Username"
                    :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="password" name="password" class="form-control"
                    placeholder="Enter password" :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" type="submit">Login</button>

            </div>
            <label v-if="error" class="alert alert-danger">Incorrect Username or Password</label>
        </form>
    </div>
</template>



<script>
import axios from 'axios'

export default {

    data() {
        return {
            username: '',
            password: '',
            submitted: false,
            error: '',
            user: {}
        }
    },
    methods: {
        checkUser() {
            this.submitted = true;
            const response = axios.post('http://localhost:4000/', {
                username: this.username,
                password: this.password
            })
            return response.data;

        }

    }


}
</script>

<style>
form,
h2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    border-radius: 20%;

}
</style>