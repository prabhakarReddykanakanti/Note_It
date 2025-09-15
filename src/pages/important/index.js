import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/sidebar";
import { useNotes } from "../../context/notes-context";
import { ImportantnotesCard } from "../../components/importantNotescard/importantnotescard";

export const Important = () => {
    const { imptitle, imptext, impArr, notesdispatch } = useNotes();

    const onimpTitleChange = (e) => {
        notesdispatch({
            type: 'IMP_TITLE',
            payload: e.target.value,
        });
    }

    const onimpTextChange = (e) => {
        notesdispatch({
            type: 'IMP_TEXT',
            payload: e.target.value,
        });
    }
    
    const onimpAddClick = () => {
        notesdispatch({
            type: 'IMP_ADD_NOTE',
        });
        notesdispatch({
            type: 'IMP_CLEAR_INPUT'
        })
    }
    
    return (
        <>
            <Navbar />
            <main className="flex gap-6 min-h-screen">
                <Sidebar />
                <div className="flex-1 py-8 pr-8">
                    {/* Input Section */}
                    <div className="flex flex-col w-[550px] relative mx-auto mb-12">
                        <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl border border-red-300/30 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
                            <input
                                value={imptitle}
                                onChange={onimpTitleChange}
                                className="w-full p-4 text-lg font-semibold bg-transparent text-white placeholder-white/70 border-b border-red-300/30 focus:outline-none focus:border-red-300/60 transition-colors"
                                placeholder="🔥 Enter important note title..."
                            />
                            <textarea
                                value={imptext}
                                onChange={onimpTextChange}
                                className="w-full p-4 text-base bg-transparent text-white placeholder-white/70 resize-none h-32 focus:outline-none transition-all"
                                placeholder="✨ Why is this important?"
                            />
                            
                            {/* Add Button */}
                            <button
                                disabled={imptitle.length === 0}
                                onClick={onimpAddClick}
                                className={`absolute bottom-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 transform ${
                                    imptitle.length === 0
                                        ? 'bg-gray-400/50 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 hover:scale-110 hover:shadow-xl active:scale-95'
                                }`}
                            >
                                <span className="material-icons text-xl text-white font-bold">add</span>
                            </button>
                        </div>
                    </div>

                    {/* Important Notes Section */}
                    <div className="px-4">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="material-icons text-white/80 text-3xl">label_important</span>
                            <h3 className="text-3xl font-bold text-white">Important Notes</h3>
                            <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
                            {impArr?.length > 0 && (
                                <span className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full border border-red-300/30">
                                    {impArr.length} {impArr.length === 1 ? 'note' : 'notes'}
                                </span>
                            )}
                        </div>
                        
                        {impArr?.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {impArr.map(({ id, imptitle, imptext }) => (
                                    <ImportantnotesCard
                                        key={id}
                                        id={id}
                                        imptitle={imptitle}
                                        imptext={imptext}
                                    />
                                ))}
                            </div>
                        ) : (
                            /* Empty State */
                            <div className="flex flex-col items-center justify-center py-12">
                                <div className="text-6xl mb-4 opacity-50">🌟</div>
                                <h3 className="text-xl font-bold text-white/80 mb-2">No important notes yet</h3>
                                <p className="text-white/60 text-center text-sm">
                                    Add your first important note above
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};