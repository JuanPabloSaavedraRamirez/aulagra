<script>
export default {
  data() {
    return {
      comments: [],
      newComment: '',
      newCommentUser: ''
    };
  },
  methods: {
    agregarComentario() {
      if (this.newComment.trim() !== '' && this.newCommentUser.trim() !== '') {
        this.comments.push({
          id: this.comments.length + 1,
          user: this.newCommentUser,
          text: this.newComment,
          replies: [],
          newReply: '',
          newReplyUser: ''
        });
        this.newComment = '';
        this.newCommentUser = '';
      }
    },
    agregarRespuesta(comment) {
      if (comment.newReply.trim() !== '' && comment.newReplyUser.trim() !== '') {
        comment.replies.push({
          id: comment.replies.length + 1,
          user: comment.newReplyUser,
          text: comment.newReply
        });
        comment.newReply = '';
        comment.newReplyUser = '';
      }
    }
  }
};
</script>

<template>
  <div>
    <h1 class="title">Blog</h1>
    <div class="container">
      <ul class="comments-list">
        <li v-for="comment in comments" :key="comment.id" class="comment">
          <strong>{{ comment.user }}</strong>: {{ comment.text }}
          <div v-if="comment.replies.length > 0" class="replies">
            <ul>
              <li v-for="reply in comment.replies" :key="reply.id" class="reply">
                <strong>{{ reply.user }}</strong>: {{ reply.text }}
              </li>
            </ul>
          </div>
          <div class="reply-form">
            <textarea v-model="comment.newReply" placeholder="Responder a la publicación"></textarea>
            <input v-model="comment.newReplyUser" placeholder="Nombre:" />
            <button @click="agregarRespuesta(comment)">Responder</button>
          </div>
        </li>
      </ul>
      <div class="new-comment-form">
        <textarea v-model="newComment" placeholder="¿Qué piensas?"></textarea>
        <input v-model="newCommentUser" placeholder="Nombre:" />
        <button @click="agregarComentario">Agregar Comentario</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
body{
  background-image: url(FondoP2.jpg);
}
.title {
  text-align: center;
  color: #333;
}

.container {
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.comments-list {
  background-color: #EDE8EC;
  list-style: none;
  padding: 10px;
  border-radius: 8px;
  width: 80%;
}

.comment {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.replies {
  margin-top: 10px;
}

.reply {
  margin-top: 5px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.reply-form {
  margin-top: 10px;
}

.new-comment-form {
  margin-top: 20px;
  text-align: center;
}

textarea, input {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

button {
  padding: 8px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
