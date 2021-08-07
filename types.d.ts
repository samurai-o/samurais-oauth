/* eslint-disable @typescript-eslint/no-empty-interface */
declare module "*.css";
declare module "*.less";
declare module "*.png";
declare module "*.svg" {
    export function ReactComponent(
        props: React.SVGProps<SVGSVGElement>,
    ): React.ReactElement;
    const url: string;
    export default url;
}


interface Window {
    NODE_ENV: string;
    APPVERSION: string;
}