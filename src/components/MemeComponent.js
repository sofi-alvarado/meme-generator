import React from 'react';
import memesData from '../memesData';

export default function MemeComponent() {
 /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */

    const [memeImage, setMemeImage] = React.useState("");

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(url);
            // memesArray[randomNumber].url  <-- this line is incomplete!
    }

    return (
        <main>
            <div className='form'>
                <input className='form--input' type='text' placeholder='Top text'/>
                <input className='form--input' type='text' placeholder='Bottom text'/>
                <button onClick={getMemeImage} className='form--button' type='submit'>Get a new meme image 🖼️</button>
            </div>
            <img className='meme--image' src={memeImage}></img>
        </main>
    )
}