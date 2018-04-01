import Vue from 'vue';

import Comment from '../../components/list-item/comment/comment.vue';

export default {
    components: {
        'comment': Comment
    },
    data() {
        return {
            comments: []
        };
    },
    created() {
        const id = this.$route.params.id;
        this.$http.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then((response) => {
            this.comments = response.data;
        }, (error) => {
            console.log(error);
        });
    }
};