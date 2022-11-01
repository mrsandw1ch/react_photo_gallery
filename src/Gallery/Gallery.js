import './Gallery.scss'
import { useState } from "react";
import { crabs } from "../assets/items";

export function Gallery({style}) {
    const [locationFilter, setLocationFilter] = useState('All');
    const [locationButtonClicked, setLocationButtonClicked] = useState('All')
    const [displayFilteredGallery, setDisplayFilteredGallery] = useState(true);

    function selectLocation(loc) {
        setLocationButtonClicked(loc)

        if (loc !== locationFilter) {
            setDisplayFilteredGallery(false)
            setTimeout(() => {
                setLocationFilter(loc)
                setTimeout(() => {
                    setDisplayFilteredGallery(true)
                }, "50")
            }, "400")
        }
    }

    const locations = ['All']
        .concat(crabs
            .map(item => item.location)
            .reduce((acc, loc) => acc.indexOf(loc) === -1 ? acc.concat(loc) : acc, [])
            )
        

    const locationButtons = locations
        .map((loc, i, arr)  =>  <div key={'location-'+loc}>
                                    <button
                                        className={"location-btn" + (locationButtonClicked === loc ? ' location-clicked' : '')}
                                        onClick={()=>{selectLocation(loc)}}
                                        disabled={!displayFilteredGallery && locationButtonClicked !== loc}>
                                        <h2>{loc}</h2>
                                    </button>
                                    { i < arr.length - 1 && <span className='location-slash'>&nbsp;/&nbsp;</span>}
                                </div>)

    const galleryItems = crabs
    .filter(item => locationFilter === 'All' || locationFilter === item.location)
    .map((item, i)  =>  <figure
                            className="gallery-item"
                            key={'gallery-item-' + item.id}
                            style={{opacity: displayFilteredGallery ? '1' : '0'}}>
                            <figcaption className="item-caption">
                                <h3 className="item-name">{item.name}</h3>
                                <div className="item-info">
                                    <p className="author">
                                        <span className='item-info-key'>Author:</span>
                                        &nbsp;{item.author}
                                    </p>
                                    <p className="family">
                                        <span className='item-info-key'>Family:</span>
                                        &nbsp;{item.family}
                                    </p>
                                    <p className="scientific-data">
                                        <span className='item-info-key'>Scientific data:</span>
                                        &nbsp;{item.scientificData}
                                    </p>
                                </div>
                            </figcaption>
                            <img className="item-image" src={item.src} alt={item.name} />
                        </figure>)
    
    return (
        <div id="gallery" style={style}>
            <div id="locations">
                {locationButtons}
            </div>
            <div id="gallery-items">
                {galleryItems}
            </div>
        </div>
    )
}