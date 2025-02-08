import { startTransition } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			contacts: [
				{
					name: "FIRST CONTACT",
					phone: "34"
				},
				{
					name: "SECOND CONTACT",
					phone: "12"
				}
			],

			editingContact: null  // Añade esto para almacenar el contacto que se está editando
		},
		
		actions: {

			agregarContacto: (newContact) => {
                const store = getStore();
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newContact)
                };
                
                fetch('https://playground.4geeks.com/contact/agendas/AlejandroArraga/contacts', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        // Asumiendo que la API devuelve el contacto añadido
                        setStore({ contacts: [...store.contacts, data] });
                    })
                    .catch(error => console.error('Error:', error));
				},

				actualizarContacto: (contactoActualizado, id) => {
					const store = getStore();
					const requestOptions = {
						method: 'PUT',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(contactoActualizado)
					};
				
					fetch(`https://playground.4geeks.com/contact/agendas/AlejandroArraga/contacts/${id}`, requestOptions)
						.then(response => response.json())
						.then(data => {
							const updatedContacts = store.contacts.map(contact => 
								contact.id === id ? { ...contact, ...data } : contact
							);
							setStore({ contacts: updatedContacts });
						})
						.catch(error => console.error('Error:', error));
				},

				editarContacto: (contacto) => {
					setStore({ editingContact: contacto }); // Simplemente guarda el contacto a editar en el estado
				},
			
			eliminarContacto: (id) => {
				console.log('Se va a eliminar el contacto desde flux' + id)
				const requestOptions = {
					method: "DELETE",
					redirect: "follow"
				  };
				  
				  fetch("https://playground.4geeks.com/contact/agendas/AlejandroArraga/contacts/" + id, requestOptions)
					.then((response) => response.text())
					.then((result) => {
						console.log((result))
						fetch('https://playground.4geeks.com/contact/agendas/AlejandroArraga/contacts')
						.then( (response) => response.json() )
						.then( (data) => setStore({ contacts: data.contacts }) )
					})
					.catch(error => console.error('Error:', error));
			},

			
			loadSomeData: () => {
				
				fetch('https://playground.4geeks.com/contact/agendas/AlejandroArraga/contacts')
				.then( (response) => response.json() )
				.then( (data) => setStore({ contacts: data.contacts }) )
				}
			}
		}
	};

export default getState;
