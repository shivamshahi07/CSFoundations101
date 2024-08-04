import Image from "next/image";
import {client} from "../../../lib/contentful"; 
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


export default async function Home() {

  const notesresponse = await client.getEntries({
    content_type: "notesApp",
  });
  const notes=notesresponse.items.map((item: any) => ({
    topic: item.fields.topic,
    content: item.fields.content,
    tags: item.fields.tags,
    createdDate: item.fields.createdDate,
    updatedDate: item.fields.updatedDate,
  })); 
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Notes</h1>
      <div className="flex flex-col gap-12">
        <p>{notes[0].topic}</p>
        <div>{documentToReactComponents(notes[0].content)}</div>
        {/* <p>{notes[0].tags}</p>
        <p>{notes[0].createdDate}</p>
        <p>{notes[0].updatedDate}</p>
         */}
        
      </div>
      
    </main>
  );
}
