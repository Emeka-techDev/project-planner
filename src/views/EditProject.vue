<template>
  <h1>Edit Project</h1>
  <div>
        <form @submit="handleUpdate">
            <label for="">Title</label>
            <input type="text" v-model="title">

            <label for="">Details</label>
            <textarea v-model="details"></textarea>

            <button>Update project</button>
        </form>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            title: '',
            details: '',
            uri: 'http://localhost:3000/projects/' + this.id
        }
    },
    methods : {
        handleUpdate() {
            let update = {
                title : this.title,
                details : this.details
            }
            fetch(this.uri, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(update)
            })
                .then(() => this.$router.push('/'))
            
        }
    },
    mounted() {
        fetch(this.uri)
            .then(res => res.json())
            .then(data => {
                console.log(data.title);
                this.title = data.title;
                this.details = data.details;
                console.log(this.title, this.details);
            }) 
    }
}
</script>

<style>

</style>