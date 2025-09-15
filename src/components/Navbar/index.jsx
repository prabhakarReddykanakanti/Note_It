import logo from '../../assets/notesapp.jpeg'

export const Navbar = () => {
    return (
        <header className='flex px-4 py-2 gap-3 bg-white/20 backdrop-blur-md border-b border-white/20 shadow-lg'>
            <div className='w-8 h-8 rounded-full overflow-hidden shadow-md ring-2 ring-white/30 transition-transform duration-300 hover:scale-110'>
                <img className='w-full h-full object-cover' src={logo} alt='logo'/>
            </div>
            <div className='flex items-center'>
                <h1 className='text-white text-2xl font-bold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent drop-shadow-lg'>
                    Noteit
                </h1>
                <div className='ml-2 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse'></div>
            </div>
        </header>
    )
}