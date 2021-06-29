import React from 'react';



const LibrarySong = ({ song, songs, setCurrentSong, id, key, audioRef, isPlaying }) => {

    const songSelectHandler = () => {

        setCurrentSong(song);
        //  audioRef.current.play();
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play();
                })
            }
        }

    }
    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h2>{song.name}</h2>
                <h3>{song.artist}</h3>
            </div>
        </div>
    );
}
export default LibrarySong;