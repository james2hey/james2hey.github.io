import React, { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { Cross } from './cross';

export interface ModalProps {
    className?: string;
    children: ReactNode;
    trigger: ReactNode;
    title: string;
    description?: string;
    onOpenChange?: (isOpen: boolean) => void;
}

export const Modal: React.FC<ModalProps> = props => (
    <Dialog.Root onOpenChange={props.onOpenChange}>
        <Dialog.Trigger asChild>{props.trigger}</Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className='modal-overlay' />
            <Dialog.Content>
                <motion.div
                    className='modal'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring' }}
                >
                    {props.title && <Dialog.Title className='modal__title'>{props.title}</Dialog.Title>}
                    {props.description && <Dialog.Description>{props.description}</Dialog.Description>}
                    <Dialog.Close className='modal__close-button'>
                        <Cross />
                    </Dialog.Close>
                    {props.children}
                </motion.div>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
);
