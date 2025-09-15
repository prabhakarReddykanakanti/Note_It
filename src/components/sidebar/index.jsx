import { NavLink } from "react-router-dom"

export const Sidebar = () => {
    const getStyles = ({ isActive }) => {
        const baseStyles = "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
        return isActive 
            ? `bg-white/30 text-white shadow-lg backdrop-blur-sm border border-white/20 ${baseStyles}`
            : `hover:bg-white/20 text-white/80 hover:text-white hover:shadow-md ${baseStyles}`
    }
    
    return (
        <aside className="flex flex-col gap-4 bg-white/10 backdrop-blur-md border-r border-white/20 w-[180px] h-screen p-4 shadow-xl">
            <div className="mb-4">
                <h2 className="text-white/60 text-sm font-semibold uppercase tracking-wider">Navigation</h2>
            </div>
            
            <NavLink className={getStyles} to='/'>
                <span className="material-icons-outlined text-xl">
                    home
                </span>
                <span>Home</span>
            </NavLink>
            
            <NavLink
                className={getStyles}
                to="/archive"
                onClick={(e) => {
                    if (window.location.pathname === "/archive") {
                        e.preventDefault();
                    }
                }}
            >
                <span className="material-icons-outlined text-xl">archive</span>
                <span>Archive</span>
            </NavLink>

            <NavLink className={getStyles} to='/important'>
                <span className="material-icons-outlined text-xl">
                    label_important
                </span>
                <span>Important</span>
            </NavLink>

            <NavLink className={getStyles} to='/bin'>
                <span className="material-icons-outlined text-xl">
                    delete
                </span>
                <span>Bin</span>
            </NavLink>
        </aside>
    )
}