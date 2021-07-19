import LandingShowCase from "./components/LandingShowCase";
import Packages from './components/PackagesComponent';
import { Fragment } from 'react';

export default function Home() {
    return (
        <Fragment>
            <LandingShowCase />
            <Packages />
        </Fragment>
    )
}