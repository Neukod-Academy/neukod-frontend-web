
import type React from "react"
import Sidenav from "./sidenav"

const Home: React.FC = () => {

    return (
        <div className="min-h-screen bg-[#9c88ff]">
            <Sidenav />
            <main className="pl-24 pt-8">
                <h1 className="text-4xl font-bold text-white">Welcome to the Dashboard</h1>
                {/* Add your main content here */}
            </main>
        </div>
    )
}
export default Home;