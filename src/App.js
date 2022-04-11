import { useState, useRef, Fragment } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'

function App() {
    let [message, setMessage] = useState('Search for Music!')
 let [data, setData] = useState([])
 let searchInput = useRef('')

    const API_URL = 'https://itunes.apple.com/search?term='
    
    const handleSearch = (e, term) => {
        e.preventDefault()
        // Fetch Data
        const fetchData = async () => {
            document.title = `${term} Music`
            const response = await fetch(API_URL + term)
            const resData = await response.json()
            if (resData.results.length > 0) {
                // Set State and Context value
                return setData(resData.results)
            } else {
                return setMessage('Not Found')
            }
        }
        fetchData()
    }
    
    return (
        <div>
        {message}
            <Router>
                <Routes>
                    <Route path="/" element={
                        <Fragment>
                             <SearchBar handleSearch = {handleSearch}/>
                            <Gallery data={data} />
                        </Fragment>
                    } />
                    <Route path="/album/:id" element={<AlbumView />} />
                    <Route path="/artist/:id" element={<ArtistView />} />
                </Routes>
            </Router>
        </div>
    )    
}

export default App;

