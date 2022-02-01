import React from "react";
import './Loader.css'


const Loader: React.FC = () => {
    return (
        <div className='loading-bar'>
            <div className='loading-bar__round loading-bar__round-green'/>
            <div className='loading-bar__round loading-bar__round-red'/>
            <div className='loading-bar__round loading-bar__round-yellow'/>
            <div className='loading-bar__round loading-bar__round-aqua'/>
            <div className='loading-bar__round loading-bar__round-lightgray'/>
            <div className='loading-bar__round loading-bar__round-gray'/>
        </div>
    )
}

export default Loader;