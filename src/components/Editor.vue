<template>
<div id="note-editor">
  <div class="form-group">
    <input type="text"
           placeholder="Add title here..."
           class="title-editor form-control"
           @input="updateNote"
           v-model="localNote.title">
    <textarea
      placeholder="Add content here..."
      class="content-editor form-control"
      @input="updateNote"
      v-model="localNote.content"></textarea>
  </div>
</div>
</template>

<script>
 import _ from 'lodash'
 import {mapState, mapActions} from 'vuex'

 export default {
   computed: {
     ...mapState(['activeNote']),
     localNote () {
       return {
         title: this.activeNote ? this.activeNote.title : '',
         content: this.activeNote ? this.activeNote.content : ''
       }
     }
   },
   methods: {
     ...mapActions(['editNote']),
     updateNote:
       _.debounce(function () {
         this.editNote(this.localNote)
       }, 1000 * 5)
   }
 }
</script>
