export const findNotesInarchiveArr=(archiveArr,id)=>{
    return archiveArr.some(note=>note.id ===id)
  }