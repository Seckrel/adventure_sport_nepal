import LandingShowCase from '../../recycle/LandingShowCase';
import Packages from './components/PackagesComponent';
import { Fragment } from 'react';

import AdventureMediaCard from "./components/AdventureComponent";
import Introduction from './components/IntroductionComponent';


export default function Home() {
    return (
        <Fragment>
            <LandingShowCase
                // imageSrc={""}
                // infoText={""}
                // learnMore={true}
            />
            <Introduction />
            <Packages />
            <AdventureMediaCard />
        </Fragment>
    )
}