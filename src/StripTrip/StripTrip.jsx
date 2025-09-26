import { useState } from "react";
import { Link } from "react-router";
import LinkComponent from "../LinkComponent/LinkComponent";
import comics from "../Comics Info/comics-data";
import './StripTrip.css';

const StripTrip = () => {
    const [year, setYear] = useState(0)
    
    let filteredEntries = comics.filter((comic) => comic.year === year)
    

    return <div className="strip-trip-container">
        <h1>СтрипТрип</h1>
        <p>
        краток опис за СтрипТрип
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ut officia minus, consequuntur inventore sequi qui nemo maxime, assumenda perspiciatis dicta? Quidem necessitatibus illo fugit! Dicta voluptatibus id enim expedita!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat magni possimus, iste modi beatae illum incidunt, optio laborum a officia natus reiciendis numquam! Voluptatem consequuntur quia sequi dolor. Earum, aliquid.
        </p>

        <h2>Стрипови од конкурсот за најдобар краток стрип</h2>
        <div className="btn-container">
        <button onClick={() => setYear(2024)}>2024</button>
        <button onClick={() => setYear(2025)}>2025</button>
        </div>
        <div id="entry" >
        
        {
           filteredEntries.length === 0 && year === 0 ? 
           <h1>Изберете година</h1>
           :
            filteredEntries[0]?.entries.map((entry) => {
                return <Link to={`/стрип-од-конкурс/${entry.id}`} key={entry.id}>
                    {
                    entry.cover === null ? 
                    <img src="https://ik.imagekit.io/qxje7xjia/Profile%20Pics/comic-placeholder-img.jpg?updatedAt=1758781177502" alt="cover-placeholder" />
                    :
                    <img src={entry.cover} alt="cover-pic" />
                    }
                    <h4>{entry.name}</h4>
                    <h4>{entry.author}</h4>
                    <h4>{entry.year}</h4>
                </Link>
            })
        }
        </div>
        <LinkComponent />
    </div>
}

export default StripTrip;