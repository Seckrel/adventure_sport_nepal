import LandingShowCase from "../../recycle/LandingShowCase";
import HookInfoText from "./components/HookInfoText";
import PackageInfoNavigation from "./components/PackageInfoNavigation";
import { Fragment } from "react";

export default function TrekExpedition() {
    return (
        <Fragment>
            <LandingShowCase />
            <HookInfoText />
            <PackageInfoNavigation />
        </Fragment>
    );
}
