/**
 * Created by chenmf on 2017/6/26.
 */
export const filteredNotes = state => {
  if (state.show === 'all') {
    return state.notes
  } else if (state.show === 'favorites') {
    return state.notes.filter(note => note.favorite)
  }
}

export const noneActiveNote = state => {
  for (let x in state.activeNote) {
    return false
  }
  return true
}
