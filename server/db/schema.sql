CREATE TABLE users (
    user_id VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    email VARCHAR(255)
)

CREATE TABLE reviews (
	id SERIAL PRIMARY KEY, 
	reviewer_id VARCHAR(255) NOT NULL,
	TMDB_id INTEGER NOT NULL,
	media_type VARCHAR(5) NOT NULL CHECK (media_type IN ('movie', 'tv')),
	rating NUMERIC(2,1) NOT NULL CHECK (rating >= 0 AND rating <= 5),
	review TEXT,
	created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
	FOREIGN KEY (reviewer_id) REFERENCES users(user_id) ON DELETE CASCADE
)
