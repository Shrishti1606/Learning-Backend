import React from 'react'

const CreatePost = () => {
    return (
        <section className='create-post-sec'>
            <h1>Create Post</h1>

            <form>

                <input type="file" name="image" accept="image/*" />
                <input type="text" name="Caption" placeholder="Enter Caption" required />
                <button type="submit">Submit</button>

            </form>
        </section>
    )
}

export default CreatePost