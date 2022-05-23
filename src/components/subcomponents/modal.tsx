import React, {ReactNode} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {Cross} from "./cross";

export interface ModalContentProps {
    title: string;
    description?: string;
    children: ReactNode;
}

export const ModalContent: React.FC<ModalContentProps> = props => {
    return (
        <Dialog.Content>
            <div className="modal">
                <Dialog.Title>{props.title}</Dialog.Title>
                {props.description && <Dialog.Description>{props.description}</Dialog.Description>}
                <Dialog.Close className="modal__close-button" />
                {props.children}
            </div>
        </Dialog.Content>
    )
}

export interface ModalTriggerProps {
    children: ReactNode
}

export const ModalTrigger: React.FC<ModalTriggerProps> = props => {
    return (
        <Dialog.Trigger asChild={true}>{props.children}</Dialog.Trigger>
    )
}

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
                    {props.title && <Dialog.Title>{props.title}</Dialog.Title>}
                    {props.description && <Dialog.Description>{props.description}</Dialog.Description>}
                    <Dialog.Close className="modal__close-button"><Cross /></Dialog.Close>
                    {props.children}
                </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
};
