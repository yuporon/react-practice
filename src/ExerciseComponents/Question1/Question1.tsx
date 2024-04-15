import { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
} from "@chakra-ui/react";

type TimerModalProps = {
  isOpen: boolean;
  onClose: () => void
}

function TimerModal({ isOpen, onClose }: TimerModalProps) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (isOpen) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      setCount(0);
    }
  }, [isOpen]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>モーダル</ModalHeader>
        <ModalCloseButton />
        <ModalBody>このモーダルを開いてから経過した時間：{count}秒</ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            閉じる
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export function Question1() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center pt={20}>
      <Button onClick={onOpen}>モーダルを開く</Button>
      <TimerModal isOpen={isOpen} onClose={onClose} />
    </Center>
  );
}
