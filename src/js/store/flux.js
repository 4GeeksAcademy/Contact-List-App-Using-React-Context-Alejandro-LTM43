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
			]
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
			
			eliminarContacto: (indexToDelete) => {
				console.log('Se va a eliminar el contacto desde flux' + indexToDelete)
				const requestOptions = {
					method: "DELETE",
					redirect: "follow"
				  };
				  
				  fetch("https://playground.4geeks.com/contact/agendas/AlejandroArraga/contacts/" + indexToDelete, requestOptions)
					.then((response) => response.text())
					.then((result) => {
						console.log((result))
						fetch('https://playground.4geeks.com/contact/agendas/AlejandroArraga/contacts')
						.then( (response) => response.json() )
						.then( (data) => setStore({ contacts: data.contacts }) )
					})
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
