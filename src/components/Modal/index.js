import { useRef } from "react";
import { Portal } from "../Portal";
import { Backdrop, Content } from "./styles";

export const Modal = ({open, onClose, children}) => {
    const backdrop = useRef(null);

    const onClick = (e) => {
        if(backdrop.current === e.target){
            onClose();
        }
    }

    if(!open) return null

    return (
        <Portal>
            <Backdrop onClick = {onClick} ref={backdrop}>
                <Content>
                    {children}
                </Content>
            </Backdrop>
        </Portal>
    )
}