import LandingShowCase from "./components/LandingShowCase";
import Packages from './components/PackagesComponent';
import { Fragment } from 'react';

import AdventureMediaCard from "./components/AdventureComponent";
import Introduction from './components/IntroductionComponent';


export default function Home() {
    return (
        <Fragment>
            <LandingShowCase />
            <Introduction />
            <Packages />
            <AdventureMediaCard />
        </Fragment>
    )
}