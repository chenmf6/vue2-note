<template>
 <div id="note-toolbar">
   <i class="glyphicon logo disabled"><img src="../assets/logo.png" width="30" height="30"></i>
   <i @click="addNote()" class="glyphicon glyphicon-plus" title="Add New Note"></i>
   <i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite, disabled: noneActiveNote}" title="Favorite"></i>
   <i class="glyphicon glyphicon-remove" :class="{disabled:noneActiveNote}" @click="checkAndSetShowAll" data-toggle="modal" data-target="#delete-modal" title="Remove Note"></i>
 </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(['noneActiveNote']),
    ...mapState(['activeNote', 'show'])
  },
  methods: {
    ...mapActions(['addNote', 'toggleFavorite', 'setShow']),
    checkAndSetShowAll: function () {
      if (this.show === 'favorites' && !this.activeNote.favorite) {
        this.setShow('all')
      }
    }
  }
}
</script>

