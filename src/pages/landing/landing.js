import Vue from 'vue';

import Post from '../../components/list-item/post/post.vue'

export default {
    components: {
        'post': Post
    },
    data() {
        return {
            posts: []
        };
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            this.posts = response.data;
        }, (error) => {
            console.log(error);
        });
    }
};