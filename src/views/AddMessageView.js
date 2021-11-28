import { useState } from 'react'

function AddMessage(props) {
    // const [image, setImage] = useState('');
    const [date, setDate] = useState('');
    const [covers, setCovers] = useState(0);
    const [eightySix, setEightySix] = useState('');
    const [serviceNote, setServiceNote] = useState('');
    const [foodBev, setFoodBev] = useState('');
    const [misc, setMisc] = useState('');

    // const handleImageInput = event => setImage(event.target.value);
    const handleDateInput = event => setDate(event.target.value) 
    const handleCoversInput = event => setCovers(event.target.value);
    const handleEightySixInput = event => setEightySix(event.target.value);
    const handleServiceNoteInput = event => setServiceNote(event.target.value);
    const handleFoodBevInput = event => setFoodBev(event.target.value);
    const handleMiscInput = event => setMisc(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newMessage = { /*image,*/ date, covers, eightySix, serviceNote, foodBev, misc };

        console.log("Submitted: ", newMessage);
    }

    return (
    <div className="AddMessage">
        <h4>Add Preshift</h4>

        <form onSubmit={handleSubmit }>
            {/* <label>Image:</label>
            <input 
                type="text"
                name="image"
                value={image}
                onChange={handleImageInput}
                /> */}

                <label>Date: </label>
                <input 
                    type="text"
                    name="date"
                    value={date}
                    onChange={handleDateInput}
                />

                <label>Covers: </label>
                <input 
                    type="number"
                    name="covers"
                    value={covers}
                    onChange={handleCoversInput}
                />

                <label>86s: </label>
                <input 
                    type="text"
                    name="eightySix"
                    value={eightySix}
                    onChange={handleEightySixInput}
                />

                <label>Service Notes: </label>
                <input 
                    type="text"
                    name="serviceNote"
                    value={serviceNote}
                    onChange={handleServiceNoteInput}
                />

                <label>Food&Bev Update: </label>
                <input 
                    type="text"
                    name="foodBev"
                    value={foodBev}
                    onChange={handleFoodBevInput}
                />

                <label>Misc: </label>
                <input 
                    type="text"
                    name="misc"
                    value={misc}
                    onChange={handleMiscInput}
                />

                <button type="submit">Add Preshift</button>

                
        </form>
    </div>
)};

export default AddMessage;
