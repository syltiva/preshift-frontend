import { useState, useEffect } from "react";
import { deleteMessageInApi, getSingleMessageFromApi, updateMessageInApi, imageUploadToApi } from "../services/messageService";
import { Navigate, useNavigate, useParams } from "react-router"
import {Spinner} from "react-bootstrap"
import "./AddMessageView.css"
import "./EditMessageView.css"

const EditMessageView = () => {
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState("")
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

    const handleImageChange = async (event) => {
        const imageFile = event.target.files[0]
        console.log("event.target.files[0] from Edit:", event.target.files[0])
        await imageUploadToApi(id, imageFile)
        getMessage();
        setPreview(URL.createObjectURL(imageFile));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setTimeout(async ()=> {
            const response = await updateMessageInApi(message);
            getMessage();
            await navigate('/')
            setLoading(false)


        }, 2000)
        
    };

    const handleDelete = async (event) => {
        const option = window.confirm("Delete preshift?");
        if (!option) return;
        event.preventDefault();
        const response = await deleteMessageInApi(id);
        navigate('/')
    }

    return (
        <div className="editview-background">
         <div className="container">
        {loading && (
          <div style={{textAlign: 'center', marginTop: 20}}> 
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="secondary" />
          <br/><p style={{color: "white"}}>loading.</p>
        </div>
        )}
        </div>
        <div className="form-card">
    <br/><br/><br/>
     <div className="container">
         <div className="row">
             <div className="col-lg-12 col-m-12">
                 <form className="form-style">
                     <h4>Edit Preshift</h4>
                     <label>Image:</label>
                     <input 
                        className= "form-control"
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                        accept="image/*"
                        placeholder=""
                        /> <br/>

                     <label>Date: </label>
                     <input
                        className="form-control" 
                        type="text"
                        name="date"
                        value={message.date}
                        onChange={handleChange}    
                    /> <br/>

                     <label>Covers: </label>
                     <input
                        className="form-control" 
                        type="number"
                        name="covers"
                        value={message.covers}
                        onChange={handleChange}
                    /><br/>

                     <label>86s: </label>
                     <input
                        className="form-control" 
                        type="text"
                        name="eightySix"
                        value={message.eightySix}
                        onChange={handleChange}
                    /><br/>

                     <label>Service Notes: </label>
                     <textarea
                        className="form-control" 
                        type="text"
                        name="serviceNote"
                        value={message.serviceNote}
                        onChange={handleChange}
                    /><br/>

                     <label>Food&Bev Update: </label>
                     <textarea
                        className="form-control" 
                        type="text"
                        name="foodBev"
                        value={message.foodBev}
                        onChange={handleChange}
                    /><br/>

                     <label>Misc: </label>
                     <textarea
                        className="form-control" 
                         type="text"
                         name="misc"
                         value={message.misc}
                         onChange={handleChange}
                    /><br/>

                     <button 
                         onClick={handleSubmit}
                         className="btn btn-outline-dark"
                     >Submit</button><br/>

                     <button
                         onClick={handleDelete}
                         className="btn btn-outline-dark"
                     >Delete Preshift</button><br/>
                      <img style={{width:400, height: "auto", margin: "20px 0 40px 0"}} src={preview} />

                 </form>
                
             </div>
         </div>
     </div>   
     </div>
     </div>
    )
}

export default EditMessageView;