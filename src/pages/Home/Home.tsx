import { useContext } from "react";

import { Header } from "../../components/layout/Header/";
import { Main } from "../../components/layout/Main";
import { Navbar } from "../../components/layout/Navbar";

import { ClimateInformation } from "../../components/ui/cards/ClimateInformation/ClimateInformation";
import { ClimateDetails } from "../../components/ui/cards/ClimateDetails";
import { ClimatePreview } from "../../components/ui/cards/ClimatePreview";
import { SunMoonToggle } from "../../components/ui/cards/SunMoonToggle";

import { LocationContext } from "../../context/LocationContext";

import { ElementGroupHome, StyledHome } from "./Home.style";
import { Loading } from "../../components/layout/Loading";

export const Home = () => {
	const location = useContext(LocationContext);

	return (
		<StyledHome>
			<Header />
			<Main>
				{location ? (
					<ElementGroupHome>
						<div className="content--box-1">
							<ClimateInformation />
						</div>
						<div className="content--box-2">
							<ClimateDetails />
						</div>
						<div className="content--box-3">
							<ClimatePreview />
						</div>
						<div className="content--box-4">
							<SunMoonToggle />
						</div>
					</ElementGroupHome>
				) : (
					<Loading />
				)}
			</Main>
			<Navbar />
		</StyledHome>
	);
};
