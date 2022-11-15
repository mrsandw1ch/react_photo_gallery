import './App.scss';
import { useState } from 'react';
import { Gallery } from '../Gallery/Gallery';
import { List } from '../List/List';

function App() {
    const [view, setView] = useState('gallery')
    const [viewButtonClicked, setViewButtonClicked] = useState('gallery')
    const [displayGallery, setDisplayGallery] = useState(true)
    const [displayList, setDisplayList] = useState(false)

    function toggleView(newView) {
        setViewButtonClicked(newView);

        if (newView !== view) {
            if (newView === 'list') {
                setDisplayGallery(false)
                setTimeout(() => {
                    setView('list')
                    setTimeout(() => {
                        setDisplayList(true)
                    }, "50")
                }, "400")   
            }

            if (newView === 'gallery') {
                setDisplayList(false)
                setTimeout(() => {
                    setView('gallery')
                    setTimeout(() => {
                        setDisplayGallery(true)
                    }, "50");
                }, "400");
            }
        }
    }

    return (
        <div
            className="App"
            style={{backgroundColor: view === 'gallery' ? '#080808' : 'black'}}>
            <header className="App-header">
                <div id="toggle-view">
                    <button
                        className={'view-btn' + (viewButtonClicked === 'gallery' ? ' view-clicked' : '')}
                        id="gallery-btn"
                        onClick={() => {toggleView('gallery')}}
                        disabled={viewButtonClicked !== 'gallery' && view !== 'list'}>
                        Gallery
                    </button>
                    <span className='view-slash'>&nbsp;/&nbsp;</span>
                    <button
                        className={'view-btn' + (viewButtonClicked === 'list' ? ' view-clicked' : '')}
                        id="list-btn"
                        onClick={() => {toggleView('list')}}
                        disabled={viewButtonClicked !== 'list' && view !== 'gallery'}>
                        List
                    </button>
                </div>
                <h1 id="title">Crabs</h1>
                <button id="menu-button" title='to be done in future updates...'>Menu</button>
            </header>
            <main>
                {view === 'gallery' && <Gallery style={{opacity: displayGallery ? 1 : 0}}/>}
                {view === 'list' && <List style={{opacity: displayList ? 1 : 0}}/>}
            </main>
            <footer>
                <p>Images from <a href='https://www.crabdatabase.info/' rel='noreferrer' target='_blank'>www.crabdatabase.info</a></p>
                <p>	&#169; 2022 coded by <a href="https://github.com/mrsandw1ch" rel='noreferrer' target='_blank'>mrsandw1ch</a></p>
                <p>designed by <a href="https://www.behance.net/DariaBorisovna" rel='noreferrer' target='_blank'>lil_soup</a></p>
            </footer>
        </div>
  );
}

export default App;
