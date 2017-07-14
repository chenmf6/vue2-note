<template>
  <div id="delete-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="glyphicon glyphicon-remove"></i></button>
        </div>
        <div class="modal-body">
          Are you sure to delete this note?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">No</button>
          <button type="button" class="btn btn-default" @click="deleteNote" data-dismiss="modal">Yes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        modal: false
      }
    },
    methods: mapActions(['deleteNote'])
  }
</script>
