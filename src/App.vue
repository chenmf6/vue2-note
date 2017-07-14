<template>
  <div id="note-app">
    <toolbar></toolbar>
    <note-list></note-list>
    <editor></editor>
    <modal></modal>
  </div>
</template>

<script>
  import Toolbar from 'components/Toolbar'
  import NoteList from 'components/NoteList'
  import Editor from 'components/Editor'
  import Modal from 'components/Modal'

  export default {
    name: 'App',
    components: {Toolbar, NoteList, Editor, Modal},
    created () {
      this.$store.dispatch('setNotes')
    }
  }
</script>

