import MediaCard from "./MediaCard";

function MediaList({ mediaItems }) {
    return (
        <div className="media-list d-flex flex-wrap">
            {mediaItems.map((item) => (
                <article key={item.id}>
                    <MediaCard media={item}/>
                </article>
            ))}
        </div>
    );
}

export default MediaList;