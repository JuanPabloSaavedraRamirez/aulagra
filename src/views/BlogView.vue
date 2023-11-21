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
      <h1>Blog</h1>
      <div class="Contenedor">
          <ul>
            <li v-for="comment in comments" :key="comment.id">
              <strong>{{ comment.user }}</strong>: {{ comment.text }}
              <div v-if="comment.replies.length > 0">
                <ul>
                  <li v-for="reply in comment.replies" :key="reply.id">
                    <strong>{{ reply.user }}</strong>: {{ reply.text }}
                  </li>
                </ul>
              </div>
              <br>
              <textarea v-model="comment.newReply" placeholder="Responder a la publicacion"></textarea>
              <input v-model="comment.newReplyUser" placeholder="Nombre:" />
              <button @click="agregarRespuesta(comment)">Responder</button>
            </li>
          </ul>
          <textarea v-model="newComment" placeholder="¿Qué piensas?"></textarea>
          <input v-model="newCommentUser" placeholder="Nombre:" />
          <button @click="agregarComentario">Agregar Comentario</button>

      </div>
    </div>
  </template>
  
  
  <style scoped>
  .Contenedor{
    margin: 50px;
    align-items: center;
  }

  ul{
    background-color: #EDE8EC;
    list-style: none;
  }
  </style>
  