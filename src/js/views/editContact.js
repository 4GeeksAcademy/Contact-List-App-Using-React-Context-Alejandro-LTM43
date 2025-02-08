import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (store.editingContact) {
            setFormData(store.editingContact);
        }
    }, [store.editingContact]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.actualizarContacto(formData, store.editingContact.id);
        navigate('/');
    };

    return (
        <div className="container">
            <h1 className="text-center">Add new contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email" 
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
                        value={formData.address} 
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary col-12">Save</button>
            </form>
            <Link 
                to="/" 
                className="back-contacts-link"
            >
                or get back to contacts
            </Link>
        </div>
    );
};