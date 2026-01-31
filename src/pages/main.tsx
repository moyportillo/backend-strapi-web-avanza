import { ReactNode } from "react";
import Header from '@/pages/header';
import {FooterComponent} from "@/pages/footer";

interface Props {
    children?: ReactNode;
}

const MainComponent = ({ children }: Props) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <FooterComponent />
        </>);
};

export default MainComponent;