import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
    const { actions } = useContext(Context);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envía los datos al backend
        actions.agregarContacto(formData);
        // Limpia el formulario después de enviar
        setFormData({
            name: '',
            email: '',
            phone: '',
            address: ''
        });
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <h1>Add new contact</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        placeholder="Full Name" 
                        value={formData.name} 
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        placeholder="Enter email" 
                        value={formData.email} 
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="phone" 
                        name="phone" 
                        placeholder="Enter phone" 
                        value={formData.phone} 
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="address" 
                        name="address" 
                        placeholder="Enter address" 
                        value={formData.address} 
                        onChange={handleInputChange}
                    />
                </div>
                <button className="btn btn-primary col-12">Save</button>
            </form>
            <br />
            <Link to="/" 
                        className="back-contacts-link"
                    >
                        or get back to contacts
            </Link>
        </div>
    );
};