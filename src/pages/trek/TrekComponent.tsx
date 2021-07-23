import LandingShowCase from "../../recycle/LandingShowCase";
import HookInfoText from "../../recycle/expeditionTemplate/HookInfoText";
import PackageInfoNavigation from "../../recycle/expeditionTemplate/PackageInfoNavigation";
import { Fragment } from "react";
import ExpeditionInfo from "../../recycle/expeditionTemplate/ExpeditionInfo";
import Gallery from "../../recycle/expeditionTemplate/Gallary";
import PricingInfo from "../../recycle/expeditionTemplate/PricingInfo";
import ItineraryInfo from "../../recycle/expeditionTemplate/ItineraryInfo";
import PackageInclusion from "../../recycle/expeditionTemplate/PackageInclusion";
import CancellationDetails from "../../recycle/expeditionTemplate/CancellationDetails";
import { ExpeditionObject } from "../../recycle/ExpeditionObject";


export default function TrekExpedition() {
    return (
        <Fragment>
            <LandingShowCase />
            <HookInfoText hookInfo={ExpeditionObject.hookInfo} />
            <PackageInfoNavigation />
            <ExpeditionInfo expeditionInfo={ExpeditionObject.expeditionInfo} />
            {/* <Gallery /> */}
            <PricingInfo pricingInfo={ExpeditionObject.pricingInfo} />
            <ItineraryInfo itineraryInfo={ExpeditionObject.itinerayInfo} />
            <PackageInclusion packageInclusion={ExpeditionObject.packageInclusion} />
            <CancellationDetails />
        </Fragment>
    );
}
