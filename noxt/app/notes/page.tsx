import Link from "next/link";
import PocketBase from 'pocketbase';
import CreateNotes from "./CreateNotes";

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'


async function getNotes() {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const data = await pb.collection('notes').getFullList({
        sort: '-created',
    });
    
    //const result = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30');

    return data as any[];
}

export default async function NotesPage() {
    const notes = await getNotes();

    return(
        <div>
            {notes?.map((note) => {
                return <Note key={note.id} note={note} />
            })}
            <CreateNotes />
        </div>

    );
}

function Note({ note }: any) {
    const { id, title, content, created } = note || {};

    return (
        <Link href={`/notes/${id}`}>
            <div>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}