import { Composition } from "../../model/compositions";
import {Modal, ModalOverlay, ModalCloseButton, ModalBody, ModalContent, useDisclosure, IconButton } from '@chakra-ui/react'
import { Fragment } from "react";
import { ViewIcon } from "@chakra-ui/icons";
import CompositionDetails from "./CompositionDetails";

type CompositionModalProps = {
  composition: Composition;
  buttonLabel?:React.ReactNode
};

function CompositionModal({ composition, buttonLabel }: CompositionModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return <Fragment>
    <IconButton variant='ghost' icon={<ViewIcon/>} onClick={onOpen} aria-label="View composition" />
    <Modal size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <CompositionDetails composition={composition} />
        </ModalBody>
      </ModalContent>
    </Modal>
    </Fragment>;
}

export default CompositionModal;
