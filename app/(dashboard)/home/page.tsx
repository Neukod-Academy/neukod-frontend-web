import type React from "react"
import ListTrial from "./listTrial"
const Home: React.FC = () => {

    return (
        <div className="min-h-screen bg-muted/40">
            <main className="pl-24 pt-8">
               <ListTrial />
            </main>
        </div>
    )
}
export default Home;