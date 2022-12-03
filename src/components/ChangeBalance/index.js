import { Modal } from "../Modal";
import Form from '../Form';
import { useState } from "react";
import { Button } from "./styles";

export const ChangeBalance = ({onChange}) => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <Button onClick={() => setOpenModal(true)}>+</Button>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Form onChange={onChange} onCloseForm = {() => setOpenModal(false)}/>
            </Modal>
        </>
    )
}