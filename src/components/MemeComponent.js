import React from 'react'

export default function MemeComponent() {
    return (
        <main>
            <form className='form'>
                <input className='form--input' type='text' placeholder='Top text'/>
                <input className='form--input' type='text' placeholder='Bottom text'/>
                <button className='form--button' type='submit'>Get a new meme image 🖼️</button>
            </form>
        </main>
    )
}