import './List.scss'
import { useState } from 'react';
import { crabs } from '../assets/items'

export function List({style}) {
    const [itemHover, setItemHover] = useState(false);

    function setPosition(i) {
        return {
            left: (i % 2 === 0) ? -50 + Math.floor(Math.random() * 100)
                                : 'none',
            right: (i % 2 === 0) ? 'none'
                                 : -50 + Math.floor(Math.random() * 100),
            top: -100 + i * (65 - 385 / crabs.length)
        }
    }

    const [imagePositions] = useState(crabs.map((item, i) => setPosition(i)));

    const listItems = crabs
        .map((item, i)  =>  <li
                                className="list-item"
                                key={'list-item-' + i}>
                                <span
                                    className='list-item-text'
                                    onMouseOver={() => setItemHover('item-' + i)}
                                    onMouseLeave={() => setItemHover(false)}
                                    style={{opacity: itemHover ? itemHover === ('item-' + i) ? '1' : '0.2' : '1'}}>
                                    {item.name}
                                    <span className='list-item-loc'> / {item.location}</span>
                                </span>
                                <img
                                    className='list-item-image'
                                    src={item.src}
                                    alt={item.name}
                                    style={{left: imagePositions[i].left,
                                            right: imagePositions[i].right,
                                            top: imagePositions[i].top}} />
                            </li> )
    return (
        <ul id="list" style={style}>
            {listItems}
        </ul>
    )
}