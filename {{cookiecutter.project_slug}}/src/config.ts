import rc from "rc";
import info from "../package.json";

export interface Config
{
    version: string;
}

const config = <Config>rc(info.name, {
    version: info.version
});

export default config;
