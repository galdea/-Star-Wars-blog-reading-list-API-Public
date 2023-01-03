const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
		},


		actions: {
			getPeople : async () => {
				const res = await fetch("https://www.swapi.tech/api/people/");
				const data = await res.json();
				setStore({people:data.results});
			},
			getPlanets : async () => {
				const res = await fetch("https://www.swapi.tech/api/planets/");
				const data = await res.json();
				setStore({planets:data.results}); 
			},
			getVehicles : async () => {
				const res = await fetch("https://www.swapi.tech/api/vehicles/");
				const data = await res.json();
				setStore({vehicles:data.results});
			},
			handleFavorites: (element) => {
				const store = getStore()
				if(store.favorites.includes(element)){
					let newFavorites = store.favorites.filter(favorite => favorite != element)
					setStore({favorites:newFavorites})
				} else{
						setStore({favorites:[...store.favorites,element]})
					}
			}
		}
	};
};

export default getState;
