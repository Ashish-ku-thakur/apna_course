// app/course/[id]/page.tsx

import { sayHello } from "@/actions/ch";

export default async function LecturePage() {
    const lecture = await sayHello("ashish"); // server action runs on server

    console.log(lecture);
    
    return (
        <div>
            <p>{lecture}</p>
        </div>
    );
}
