import React, { useContext } from "react";
//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import contactoImage from "../../img/contacto.foto.jpg";

export const Home = () => {
	const { store, actions } = useContext(Context);

		return (
			<div>
				<ul>
					{store.contacts.map((item, index) => {
										return (
											<li
												key={index}
												className="list-group-item d-flex justify-content-between">
													 <div className="d-flex align-items-center">
													 
														<p>
															<img src={contactoImage} 
																className="rounded-circle mr-3" 
																style={{width: '50px', height: '50px', objectFit: 'cover'}} />
														</p>
														<div>
															<div>
																<p>{item.name}</p>
																<p><i className="fa-solid fa-location-dot"></i>{item.address}</p>
																<p><i className="fa-solid fa-phone"></i>{item.phone}</p>
																<p><i className="fa fa-envelope"></i>{item.email}</p>
															</div>
														</div>
													</div>
													<div>
														<button onClick={() => actions.editarContacto(item)}>Editar contacto</button>
														<button onClick={()=>actions.eliminarContacto (item.id)}>Eliminar contacto</button>
													</div>
											</li>
										);
									})}
				</ul>
			</div>
		); 
}
