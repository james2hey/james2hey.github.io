import React, {ReactNode} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {Cross} from "./cross";

export interface ModalProps {
    className?: string;
    children: ReactNode;
    trigger: ReactNode;
    title: string;
    description?: string;
    onOpenChange?: (isOpen: boolean) => void;
}

export const Modal: React.FC<ModalProps> = props => {
    return (
        <Dialog.Root onOpenChange={props.onOpenChange}>
            <Dialog.Trigger asChild={true}>{props.trigger}</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="modal-overlay" />
                <Dialog.Content>
                <div className="modal">
                    {props.title && <Dialog.Title className="modal__title">{props.title}</Dialog.Title>}
                    {props.description && <Dialog.Description>{props.description}</Dialog.Description>}
                    <Dialog.Close className="modal__close-button"><Cross /></Dialog.Close>
                    {props.children}
                </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
};
