import { ReactNode } from "react";
import Header from '@/pages/header';

interface Props {
    children?: ReactNode;
}

const MainComponent = ({ children }: Props) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>);
};

export default MainComponent;