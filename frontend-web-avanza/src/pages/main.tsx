import { ReactNode } from "react";
import Header from '@/pages/header';

interface Props {
    children?: ReactNode;
}

const MainComponent = ({ children }: Props) => {
    return <section><Header/></section>;
};

export default MainComponent;