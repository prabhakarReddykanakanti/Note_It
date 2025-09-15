
import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/sidebar"
import { useNotes } from "../../context/notes-context"
import { NotesCard } from "../../components/NotesCard"

export const Archive = () => {
    const { archiveArr } = useNotes();

    return (
        <>
            <Navbar />
            <main className="flex gap-6 min-h-screen">
                <Sidebar />
                <div className="flex-1 py-8 pr-8">
                    <div className="px-4">
                        {/* Header Section */}
                        <div className="flex items-center gap-3 mb-8">
                            <span className="material-icons text-white/80 text-3xl">archive</span>
                            <h2 className="text-3xl font-bold text-white">Archive</h2>
                            <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
                            {archiveArr?.length > 0 && (
                                <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full border border-white/30">
                                    {archiveArr.length} {archiveArr.length === 1 ? 'note' : 'notes'}
                                </span>
                            )}
                        </div>

                        {/* Archive Content */}
                        {archiveArr?.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {archiveArr.map(({ id, title, text, isPinned }) => (
                                    <NotesCard
                                        key={id}
                                        id={id}
                                        text={text}
                                        title={title}
                                        isPinned={isPinned}
                                    />
                                ))}
                            </div>
                        ) : (
                            /* Empty State */
                            <div className="flex flex-col items-center justify-center py-20">
                                <div className="text-8xl mb-6 opacity-50">🗃️</div>
                                <h3 className="text-2xl font-bold text-white/80 mb-3">Archive is empty</h3>
                                <p className="text-white/60 text-center max-w-md mb-6">
                                    When you archive notes from your home page, they'll appear here for safekeeping.
                                </p>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                    <p className="text-white/70 text-sm flex items-center gap-2">
                                        <span className="material-icons-outlined text-sm">info</span>
                                        Archived notes can be restored anytime
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}
