/**
 * Created by chenmf on 2017/6/26.
 */
import * as types from './mutation_types'
import noteStorage from '../api/storage'

export const setNotes = ({commit}) => {
  let initNotes = JSON.parse(noteStorage.get())
  if (initNotes && initNotes.length) {
    commit(types.SET_NOTES, {notes: initNotes})
  }
}

export const addNote = ({commit, state}) => {
  commit(types.ADD_NOTE)
  if (state.show !== 'all') {
    commit(types.SET_SHOW, {show: 'all'})
  }
}

export const resetActiveNote = ({commit, getters}) => {
  let filteredNotes = getters.filteredNotes
  let note = filteredNotes.length ? filteredNotes[0] : {}
  commit(types.SET_ACTIVE_NOTE, {note})
}

export const deleteNote = ({dispatch, commit}) => {
  commit(types.DELETE_NOTE)
  dispatch('resetActiveNote')
}

export const editNote = ({commit, dispatch, getters}, noteTxt) => {
  if (getters.noneActiveNote) {
    dispatch('addNote')
  }
  commit(types.EDIT_NOTE, {noteTxt})
}

export const toggleFavorite = ({commit, dispatch, state}) => {
  commit(types.TOGGLE_FAVORITE)
  if (state.show === 'favorites') {
    dispatch('resetActiveNote')
  }
}
export const setActiveNote = ({commit}, note) => commit(types.SET_ACTIVE_NOTE, {note})

export const setShow = ({dispatch, commit}, show) => {
  commit(types.SET_SHOW, {show})
  dispatch('resetActiveNote')
}
