import { type PropsWithChildren } from "react"
import type { FC } from "react"

type Image = {
    src: string,
    alt: string
}

type HeaderProps = PropsWithChildren <{image: Image}>;

const HeaderComponent : FC<HeaderProps> = ({image, children}) => {
    return (
        <>
        <img src = {image.src} alt={image.alt} />            
        {children}
        </>
    );
}

export default HeaderComponent;