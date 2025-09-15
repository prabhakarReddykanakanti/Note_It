
import { useNotes } from "../../context/notes-context";
import { findNotesInarchiveArr } from "../../utils/findNotesinArchive";

export const NotesCard = ({ id, title, text, isPinned, hidePinArchive = false, onDelete }) => {
  const { notesdispatch, archiveArr } = useNotes();
  const isNotesInarchiveArr = findNotesInarchiveArr(archiveArr, id);

  const onPinClick = (id) => {
    !isPinned
      ? notesdispatch({
        type: "PIN",
        payload: { id },
      })
      : notesdispatch({
        type: "UNPIN",
        payload: { id },
      });
  };

  const onArchiveClick = (id) => {
    !isNotesInarchiveArr
      ? notesdispatch({
        type: 'ADD_TO_ARCHIVE',
        payload: { id },
      }) : notesdispatch({
        type: 'REMOVE_FROM_ARCHIVE',
        payload: { id }
      })
  }

  const onDeleteClick = (id) => {
    if (isNotesInarchiveArr) {
      notesdispatch({
        type: "ARCHIVE_NOTE_DELETE",
        payload: { id },
      });
    } else {
      notesdispatch({
        type: "HOME_NOTE_DELETE",
        payload: { id },
      });
    }
  };

  return (
    <div className="group w-[320px] bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl shadow-xl p-5 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white/95">
      {/* Note Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-gray-800 text-lg truncate">{title}</h3>
          {isPinned && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
              📌 Pinned
            </span>
          )}
        </div>

        {!hidePinArchive && !isNotesInarchiveArr && (
          <button
            onClick={() => onPinClick(id)}
            className={`p-2 rounded-full transition-all duration-300 ${
              isPinned 
                ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
                : 'bg-gray-100 text-gray-500 hover:bg-yellow-100 hover:text-yellow-600'
            } opacity-0 group-hover:opacity-100`}
          >
            <span className={isPinned ? "material-icons text-sm" : "material-icons-outlined text-sm"}>
              push_pin
            </span>
          </button>
        )}
      </div>

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mb-3"></div>

      {/* Note Body */}
      <div className="flex flex-col">
        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">{text}</p>
        
        {/* Action Buttons */}
        <div className="flex gap-2 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {!hidePinArchive && (
            <button 
              className={`p-2 rounded-full transition-all duration-300 ${
                isNotesInarchiveArr
                  ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                  : 'bg-gray-100 text-gray-500 hover:bg-blue-100 hover:text-blue-600'
              }`}
              onClick={() => onArchiveClick(id)}
            >
              <span className={isNotesInarchiveArr ? "material-icons text-sm" : 'material-icons-outlined text-sm'}>
                archive
              </span>
            </button>
          )}
          
          <button
            className="p-2 rounded-full bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 transition-all duration-300"
            onClick={() => (onDelete ? onDelete(id) : onDeleteClick(id))}
          >
            <span className="material-icons-outlined text-sm">
              {hidePinArchive ? "delete_forever" : "delete"}
            </span>
          </button>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
    </div>
  );
};
