import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notes-context";

export const Home = () => {
  const { title, text, notes, notesdispatch, archiveArr } = useNotes();

  const onTitleChange = (e) => {
    notesdispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };

  const onTextChange = (e) => {
    notesdispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };

  const onAddClick = () => {
    notesdispatch({
      type: "ADD_NOTE",
    });
    notesdispatch({
      type: "CLEAR_INPUT",
    });
  };

  console.log(archiveArr);
  
  const pinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const otherNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

  return (
    <>
      <Navbar />
      <main className="flex gap-6 min-h-screen">
        <Sidebar />
        <div className="flex flex-col w-full py-8 pr-8">
          {/* Input Section */}
          <div className="flex flex-col w-[550px] relative self-center mb-12">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
              <input
                value={title}
                onChange={onTitleChange}
                className="w-full p-4 text-lg font-semibold bg-transparent text-white placeholder-white/70 border-b border-white/20 focus:outline-none focus:border-white/50 transition-colors"
                placeholder="✨ Enter your note title..."
              />
              <textarea
                value={text}
                onChange={onTextChange}
                className="w-full p-4 text-base bg-transparent text-white placeholder-white/70 resize-none h-32 focus:outline-none transition-all"
                placeholder="📝 What's on your mind?"
              />
              
              {/* Add Button */}
              <button
                disabled={title.length === 0}
                onClick={onAddClick}
                className={`absolute bottom-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 transform ${
                  title.length === 0
                    ? 'bg-gray-400/50 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-110 hover:shadow-xl active:scale-95'
                }`}
              >
                <span className="material-icons text-xl text-white font-bold">add</span>
              </button>
            </div>
          </div>

          {/* Notes Section */}
          <div className="px-4">
            {/* Pinned Notes Section */}
            {pinnedNotes?.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-icons text-white/80">push_pin</span>
                  <h3 className="text-2xl font-bold text-white">Pinned Notes</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {pinnedNotes.map(({ id, title, text, isPinned }) => (
                    <NotesCard
                      key={id}
                      id={id}
                      text={text}
                      title={title}
                      isPinned={isPinned}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Other Notes Section */}
            {otherNotes?.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-icons text-white/80">note</span>
                  <h3 className="text-2xl font-bold text-white">Your Notes</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {otherNotes.map(({ id, title, text, isPinned }) => (
                    <NotesCard
                      key={id}
                      id={id}
                      text={text}
                      title={title}
                      isPinned={isPinned}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {(!pinnedNotes || pinnedNotes.length === 0) && (!otherNotes || otherNotes.length === 0) && (
              <div className="flex flex-col items-center justify-center py-10">
                <div className="text-8xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-white/80 mb-2">No notes yet</h3>
                <p className="text-white/60 text-center max-w-md">
                  Start by creating your first note above. Capture your thoughts, ideas, and reminders all in one place.
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-center mt-2">
            <p className="text-white/70 text-sm flex items-center justify-center gap-2">
              Made by <span className="text-white font-semibold">Prabha Kanakanti</span>
              <a 
                href="https://www.linkedin.com/in/prabhakarkanakanti" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-200 transition-colors duration-300 hover:scale-110"
              >
                <svg 
                  className="w-4 h-4" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </p>
          </div>
          
        </div>
      </main>
    </>
  );
};