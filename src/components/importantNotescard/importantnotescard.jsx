

import { useNotes } from "../../context/notes-context";

export const ImportantnotesCard = ({ id, imptitle, imptext }) => {
  const { notesdispatch } = useNotes();

  const handleDeleteClick = () => {
    notesdispatch({
      type: "IMP_NOTE_DELETE",
      payload: { id },
    });
  };

  return (
    <div className="group relative w-[320px] bg-white/90 backdrop-blur-sm border-l-4 border-l-red-500 rounded-2xl shadow-xl p-5 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white/95 overflow-hidden">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Note Header */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-gray-800 text-lg leading-tight pr-4">{imptitle}</h3>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md">
              🔥 Important
            </span>
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="h-px bg-gradient-to-r from-red-200 via-pink-300 to-red-200 mb-4"></div>

        {/* Note Body */}
        <div className="mb-6">
          <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">{imptext}</p>
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <button
            className="p-2 rounded-full bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
            onClick={handleDeleteClick}
          >
            <span className="material-icons-outlined text-sm">delete</span>
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      <div className="absolute bottom-2 left-2 w-1 h-1 bg-gradient-to-r from-red-300 to-pink-300 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 delay-100"></div>
    </div>
  );
};