import { createContext, useContext, useReducer } from "react";
import { notesreducer } from "../reducers/notesreducers";

const NotesContext = createContext();

const Notesprovider = ({ children }) => {
    const initialstate = {
        title: '',
        text: '',
        notes: [],
        archiveArr:[],
        imptitle:'',
        imptext:'',
        impArr:[],
        binArr:[]
    }



    const [{ title, text, notes,archiveArr,imptitle,imptext,impArr,binArr}, notesdispatch] = useReducer(notesreducer, initialstate);

    return (
        <NotesContext.Provider value={({title,text,notes,archiveArr,imptitle,imptext,impArr,binArr,notesdispatch})}>
            {children}
        </NotesContext.Provider>
    )

}

const useNotes=()=> useContext(NotesContext);

export{Notesprovider,useNotes}
