import MediaList from "./MediaList";

function SearchMediaData({title, movieArray}) {
    console.log(movieArray);
    if(movieArray.length != 0){
        return(
            <section>
                <h2>{title}</h2>

                <MediaList mediaItems={movieArray} />

                {/* {loading ? (
                    <p>Loading media....</p>
                ) : error ? (
                    <p>{error}</p>
                ) : mediaItems.length === 0 ? (
                    <p>Media not found :/</p>
                ) : (
                    <MediaList mediaItems={movieArray} />
                )} */}
            </section>
        );
    } else{
        return(
            <h2>No search results, sorry!</h2>
            
        )
    }
    
}

export default SearchMediaData;