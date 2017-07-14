<template>
<div id="note-list">
  <div id="list-header">
    <h2>Notes | chenmf</h2>
    <div class="btn-group btn-group-justified" role="group">
  <!-- All notes button -->
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default" @click="setShow('all')" :class="{active: show === 'all'}">
          All Notes
        </button>
      </div>
      <!-- Favorite notes button -->
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default" @click="setShow('favorites')" :class="{active: show === 'favorites'}">
          Favorites
        </button>
      </div>
    </div>
    <div class="notes-counter">
      <span>{{filteredNotes.length}} notes </span>
    </div>

  </div>
  <!-- render note list -->
  <div class="container">
    <ul class="list-group">
      <li v-for="note in filteredNotes"
         class="list-group-item" :class="{active: activeNote === note}"
          @click="setActiveNote(note)">
        <h4 class="list-group-item-heading">
          {{note.title ? note.title.trim(): 'New Note'}}
        </h4>
        <p class="list-group-item-body">
          {{note.content? note.content.trim(): 'Empty note.'}}
        </p>
        <span class="list-group-item-date">
          {{new Date(note.date).toLocaleString()}}
        </span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['show', 'activeNote']),
    ...mapGetters(['filteredNotes'])
  },
  methods: {
    ...mapActions(['setActiveNote', 'setShow'])
  }
}
</script>

