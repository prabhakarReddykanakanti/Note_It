import { v4 as uuid } from 'uuid'

export const notesreducer = (state, { type, payload }) => {
    switch (type) {
        case 'TITLE':
            return { ...state, title: payload }

        case 'TEXT':
            return { ...state, text: payload }

        case 'ADD_NOTE':
            return {
                ...state,
                notes: [
                    ...state.notes,
                    { text: state.text, title: state.title, id: uuid(), isPinned: false }
                ]
            }

        case 'CLEAR_INPUT':
            return { ...state, title: '', text: '' }

        case 'PIN':
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === payload.id ? { ...note, isPinned: true } : note
                )
            }

        case 'UNPIN':
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === payload.id ? { ...note, isPinned: false } : note
                )
            }

        case 'ADD_TO_ARCHIVE': {
            const noteToArchive = state.notes.find(({ id }) => id === payload.id)
            return {
                ...state,
                archiveArr: noteToArchive
                    ? [...state.archiveArr, noteToArchive]
                    : [...state.archiveArr],
                notes: state.notes.filter(({ id }) => id !== payload.id)
            }
        }

        case 'REMOVE_FROM_ARCHIVE': {
            const noteToUnarchive = state.archiveArr.find(({ id }) => id === payload.id)
            return {
                ...state,
                notes: noteToUnarchive
                    ? [...state.notes, noteToUnarchive]
                    : [...state.notes],
                archiveArr: state.archiveArr.filter(({ id }) => id !== payload.id)
            }
        }

        case 'IMP_TITLE':
            return { ...state, imptitle: payload }

        case 'IMP_TEXT':
            return { ...state, imptext: payload }

        case 'IMP_ADD_NOTE':
            return {
                ...state,
                impArr: [
                    ...state.impArr,
                    { imptitle: state.imptitle, imptext: state.imptext, id: uuid() }
                ]
            }


        case 'IMP_CLEAR_INPUT':
            return { ...state, imptitle: '', imptext: '' }

        case 'HOME_NOTE_DELETE': {
            const deletedNote = state.notes.find(({ id }) => id === payload.id)
            return {
                ...state,
                binArr: deletedNote ? [...state.binArr, deletedNote] : [...state.binArr],
                notes: state.notes.filter(({ id }) => id !== payload.id)
            }
        }

        case 'ARCHIVE_NOTE_DELETE': {
            const deletedNote = state.archiveArr.find(({ id }) => id === payload.id)
            return {
                ...state,
                binArr: deletedNote ? [...state.binArr, deletedNote] : [...state.binArr],
                archiveArr: state.archiveArr.filter(({ id }) => id !== payload.id)
            }
        }

        case "IMP_NOTE_DELETE": {
            return {
                ...state,
                impArr: state.impArr.filter(({ id }) => id !== payload.id),
            };
        }


        case "PERMANENT_DELETE": {
            return {
                ...state,
                binArr: state.binArr.filter(({ id }) => id !== payload.id),
                notes: state.notes.filter(({ id }) => id !== payload.id),
                archiveArr: state.archiveArr.filter(({ id }) => id !== payload.id),
            };
        }

        default:
            return state
    }
}


