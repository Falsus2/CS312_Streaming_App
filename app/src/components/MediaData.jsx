import {useState, useEffect} from "react";
import axios from "axios";
import MediaList from "./MediaList";

function MediaData({title, endpoint}) {
    const [mediaItems, setMediaItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMediaData = async () => {
            
            setLoading(true);
            setError(null);

            try{
                const response = await axios.get(endpoint);
                setMediaItems(response.data.results);
            } catch (err) {
                console.error(err);
                setError("Failed to load media!");
            } finally {
                setLoading(false);
            }
        };

        fetchMediaData()
    }, [endpoint]);

    return(
        <section>
            <h2>{title}</h2>

            {loading ? (
                <p>Loading media....</p>
            ) : error ? (
                <p>{error}</p>
            ) : mediaItems.length === 0 ? (
                <p>Media not found :/</p>
            ) : (
                <MediaList mediaItems={mediaItems} />
            )}
        </section>
    );
}

export default MediaData;