

import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/sidebar";
import { useNotes } from "../../context/notes-context"; 
import { NotesCard } from "../../components/NotesCard";

export const Bin = () => {
  const { binArr, notesdispatch } = useNotes();

  const handlePermanentDelete = (id) => {
    notesdispatch({
      type: "PERMANENT_DELETE",
      payload: { id },
    });
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to permanently delete all notes? This action cannot be undone.")) {
      binArr.forEach(note => {
        notesdispatch({
          type: "PERMANENT_DELETE",
          payload: { id: note.id },
        });
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex gap-6 min-h-screen">
        <Sidebar />
        <div className="flex-1 py-8 pr-8">
          <div className="px-4">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="material-icons text-white/80 text-3xl">delete</span>
                <h2 className="text-3xl font-bold text-white">Bin</h2>
                <div className="h-px bg-gradient-to-r from-white/30 to-transparent w-32"></div>
                {binArr?.length > 0 && (
                  <span className="bg-red-500/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full border border-red-300/30">
                    {binArr.length} {binArr.length === 1 ? 'note' : 'notes'}
                  </span>
                )}
              </div>
              
              {/* Clear All Button */}
              {binArr?.length > 0 && (
                <button
                  onClick={handleClearAll}
                  className="bg-red-500/20 hover:bg-red-500/30 backdrop-blur-sm text-red-200 hover:text-white px-4 py-2 rounded-xl border border-red-300/30 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="material-icons-outlined text-sm">delete_forever</span>
                  Clear All
                </button>
              )}
            </div>

            {/* Warning Banner */}
            {binArr?.length > 0 && (
              <div className="bg-red-500/10 backdrop-blur-sm border border-red-300/30 rounded-xl p-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="material-icons text-red-300">warning</span>
                  <div>
                    <p className="text-red-200 font-medium">Notes in the bin</p>
                    <p className="text-red-300/80 text-sm">These notes will be permanently deleted. Click the delete forever button to remove them completely.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Bin Content */}
            {binArr?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {binArr.map(({ id, title, text, isPinned }) => (
                  <NotesCard
                    key={id}
                    id={id}
                    text={text}
                    title={title}
                    isPinned={isPinned}
                    hidePinArchive={true}
                    onDelete={handlePermanentDelete}
                  />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="flex flex-col items-center justify-center py-20">
                <div className="text-8xl mb-6 opacity-50">🗑️</div>
                <h3 className="text-2xl font-bold text-white/80 mb-3">Bin is empty</h3>
                <p className="text-white/60 text-center max-w-md mb-6">
                  Deleted notes will appear here before being permanently removed. You can restore them or delete them forever.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-white/70 text-sm flex items-center gap-2">
                    <span className="material-icons-outlined text-sm">recycling</span>
                    Keep your workspace clean and organized
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};