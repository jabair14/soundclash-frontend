import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreatePack({ currentUser, onAddPack }){

    const [user_id, setuser_id] = useState(currentUser.id)
    const [genre_id, setgenre_id] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [preview, setPreview] = useState('')
    const [link, setLink] = useState('')
    const [price, setPrice] = useState(1)
    const history = useHistory()

    // console.log(currentUser)

    function handlePackSubmit(event) {
        event.preventDefault()

        const formData = {
            user_id,
            genre_id,
            name,
            description,
            image,
            preview,
            link,
            price,
        };

        fetch('http://127.0.0.1:3000/packs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(res => res.json())
        .then(newPack => {
            onAddPack(newPack);
            history.push(`/packs`)
        })
    }
    return(
        <>
        <section>
            <form onSubmit={handlePackSubmit}>
            <h3>Create PACK PAGE</h3>
            {/* <label htmlFor="user_id">User ID</label> */}
            <input
                type="hidden"
                id="user_id"
                name="user_id"
                value={user_id}
                onChange={(event) => setuser_id(event.target.value)}
            >
            </input>
            <label htmlFor="genre_id">Genre ID</label>
            <select
                id="genre_id"
                name="genre_id"
                value={genre_id}
                onChange={(event) => setgenre_id(event.target.value)}
            >
                <option value="1">Hip-Hop</option>
                <option value="2">RnB</option>
                <option value="3">Jazz</option>
                <option value="4">IDM</option>
                <option value="5">Ambient</option>
                <option value="6">Techno</option>
                <option value="7">House</option>
                <option value="8">Dancehall</option>
                <option value="9">Afro-beats</option>
                <option value="10">UK Drill/Grime</option>
                <option value="11">Foley</option>
                <option value="12">EDM</option>
            </select>
            <br></br>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            >
            </input>
            <br></br>
            <label htmlFor="description">Description</label>
            <input
                type="text"
                id="description"
                name="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            >
            </input>
            <br></br>
            <label htmlFor="image">imageURL</label>
            <input
                type="text"
                id="image"
                name="image"
                value={image}
                onChange={(event) => setImage(event.target.value)}
            >
            </input>
            <br></br>
            <label htmlFor="preview">previewURL</label>
            <input
                type="text"
                id="preview"
                name="preview"
                value={preview}
                onChange={(event) => setPreview(event.target.value)}
            >
            </input>
            <br></br>
            <label htmlFor="link">linkURL</label>
            <input
                type="text"
                id="link"
                name="link"
                value={link}
                onChange={(event) => setLink(event.target.value)}
            >
            </input>
            <br></br>
            <label htmlFor="price">Price</label>
            <input
                type="number"
                id="price"
                name="price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            >
            </input>
            <br></br>
            <button type="submit">Add Pack</button>

            </form>

        </section>
        </>
    )
}

export default CreatePack;