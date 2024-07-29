<template>
    <div>
        <form @submit.prevent="submitForm">
            <label for="">Title</label>
            <input type="text" v-model="title">

            <label for="">Details</label>
            <textarea v-model="details"></textarea>

            <button>Add project</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title : "",
            details : ""

        }
    },

    methods: {
        submitForm() {
            let project = {
                title : this.title,
                details: this.details,
                complete: false
            }

            fetch('http://localhost:3000/projects/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(project)
            }).then(() => {
                this.$router.push('/');
            })
        }
    }
}
</script>

<style>
    form {
        background: white;
        padding: 20px;
        margin: 0 auto;
        border-radius: 10px;
        width : 800px;
    }

    label {
        display: block;
        color: #bbb;
        text-transform : uppercase;
        font-weight: 14px;
        font-size: bold;
        letter-spacing: 1px;
        margin: 20px 0 10px 0
        
    }
   
    input {
        padding: 10px;
        border: 0;
        border-bottom: 1px solid #ddd;
        width: 100%;
        box-sizing: border-box;
    }

    textarea {
        border: 1px solid #ddd;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        height: 200px;
    }

    form button {
        display: block;
        margin: 20px auto 0;
        background: #00ce89;
        color: 10px;
        border: 0;
        border-radius: 6px;
        font-size: 16px;

    }
</style>