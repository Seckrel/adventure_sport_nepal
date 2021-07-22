import LandingShowCase from "../../recycle/LandingShowCase";
import HookInfoText from "./components/HookInfoText";
import PackageInfoNavigation from "./components/PackageInfoNavigation";
import { Fragment } from "react";
import TrekInfo from "./components/TrekInfo";
import Gallery from "./components/Gallary";
import PricingInfo from "./components/PricingInfo";
import ItineraryInfo from "./components/ItineraryInfo";
import PackageInclusion from "./components/PackageInclusion";
import CancellationDetails from "./components/CancellationDetails";

export default function TrekExpedition() {
    return (
        <Fragment>
            <LandingShowCase />
            <HookInfoText />
            <PackageInfoNavigation />
            <TrekInfo />
            {/* <Gallery /> */}
            <PricingInfo />
            <ItineraryInfo />
            <PackageInclusion />
            <CancellationDetails />
        </Fragment>
    );
}
