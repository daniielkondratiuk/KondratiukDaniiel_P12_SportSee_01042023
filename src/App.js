import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import {useEffect, useState} from "react";
import DataLoader from "./sevices/API/DataLoader";
import Loading from "./components/Loading/Loading";

/**
 * Composant principal de l'application.
 * @function
 * @returns {JSX.Element} - Composant rendu.
 */
function App() {
    const [data,setData] = useState(null)
    const searchParams = new URLSearchParams(window.location.search)
    const id = searchParams.get('id') || '12'
    const loader = new DataLoader(id);
    /**
     * Récupère les données de l'API.
     * @async
     * @function
     * @returns {Promise<void>}
     */
    const fetchData = async () => setData(await loader.loadData());

    useEffect(() => {
        fetchData()
    }, []);
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Sidebar/>
                {data ? <Dashboard data={data}/> : <Loading/>}
            </Router>
        </div>
    );
}

export default App;
