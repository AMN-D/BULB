import { revalidate } from "../page";

async function getNote(noteId: string) {
    const result = await fetch(
        `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`
    );
    const data = await result.json();
    return data;
}

export default async function NotesPage({ params }: any ) {
    const note = await getNote(params.id);
    return (
        <div>
            <h1>Notes</h1>
            <div className="{styles.note}">
                <h3>{note.title}</h3>
                <h3>{note.content}</h3>
                <h3>{note.created}</h3>
            </div>
        </div>
    );
}