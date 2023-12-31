import { createContext, useEffect, useState } from "react";
import { getLocation } from "../api/getLocation";
import { mockLocation } from "../mock/mockLocation";
import { GeoLocation } from "../interfaces/GeoLocation";

export const LocationContext = createContext<GeoLocation>(mockLocation);

interface LocationProviderProps {
	children: React.ReactNode;
}

export const LocationProvider = ({ children }: LocationProviderProps) => {
	const [location, setLocation] = useState(mockLocation);

	const fetchLocationData = async () => {
		try {
			const data = await getLocation();
			setLocation(data);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	useEffect(() => {
		fetchLocationData();
		const intervalId = setInterval(fetchLocationData, 5000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<LocationContext.Provider value={location}>
			{children}
		</LocationContext.Provider>
	);
};
