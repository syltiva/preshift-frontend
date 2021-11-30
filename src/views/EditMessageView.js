import { useState, useEffect } from "react";
import { deleteMessageInApi, getSingleMessageFromApi, updateMessageInApi } from "../services/messageService";
import { Navigate, useNavigate, useParams } from "react-router"

const EditMessageView = () => {
    const [message, setMessage] = useState({
        image: "",
        date: "",
        covers: 0,
        eightySix: "",
        serviceNote: "",
        foodBev: "",
        misc: "",
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getMessage();
    }, []);

    const getMessage = async () => {
        const response = await getSingleMessageFromApi(id);
        await setMessage(response.data);
    };

    const handleChange = (event) => {
        setMessage({
            ...message,
            [event.target.name]: event.target.value,
        });
        console.log(message)
    };

    const handleImageChange = (event) => {
        const imageFile = event.target.file[0];
        setMessage({
            ...message,
            image: imageFile,
        });
        setPreview(URL.createObjectURL(imageFile));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await updateMessageInApi(message);
        getMessage();
        navigate('/')
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        const response = await deleteMessageInApi(id);
        navigate('/')
    }

    return (
     <div className="container">
         <div className="row">
             <div className="col-lg-12 col-m-12">
                 <form>
                     <h4>Edit Preshift</h4>
                     <label>Image:</label>
                     <input 
                        className= "form-control"
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                        accept="image/*"
                        placeholder=""
                        /> 

                     <label>Date: </label>
                     <input
                        className="form-control" 
                        type="text"
                        name="date"
                        value={message.date}
                        onChange={handleChange}    
                    /> 

                     <label>Covers: </label>
                     <input
                        className="form-control" 
                        type="number"
                        name="covers"
                        value={message.covers}
                        onChange={handleChange}
                    />

                     <label>86s: </label>
                     <input
                        className="form-control" 
                        type="text"
                        name="eightySix"
                        value={message.eightySix}
                        onChange={handleChange}
                    />

                     <label>Service Notes: </label>
                     <textarea
                        className="form-control" 
                        type="text"
                        name="serviceNote"
                        value={message.serviceNote}
                        onChange={handleChange}
                    />

                     <label>Food&Bev Update: </label>
                     <textarea
                        className="form-control" 
                        type="text"
                        name="foodBev"
                        value={message.foodBev}
                        onChange={handleChange}
                    />

                     <label>Misc: </label>
                     <textarea
                        className="form-control" 
                         type="text"
                         name="misc"
                         value={message.misc}
                         onChange={handleChange}
                    />

                     <button 
                         onClick={handleSubmit}
                         className=""
                     >Submit</button>

                     <button
                         onClick={handleDelete}
                         className=""
                     >Delete Preshift</button>

                 </form>
             </div>
         </div>
     </div>   
    )
}

export default EditMessageView;