import React from 'react';
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
    FormControl,
    FormLabel,
    Input,
    Text
  } from '@chakra-ui/react'

const ForgotPassword = () => {
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.1000'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

      
        const initialRef = React.useRef()
      
        return (
          <>
            <Text onClick={() => {
                setOverlay(<OverlayOne/>)
                onOpen()}}>Change Settings</Text>
                
      
            <Modal
              initialFocusRef={initialRef}
              isCentered
              isOpen={isOpen}
              onClose={onClose}
            >
            {overlay}
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Change Password</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input ref={initialRef} placeholder='Enter your email' />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>Old Password</FormLabel>
                    <Input placeholder='Old password' type={'password'}/>
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>New Password</FormLabel>
                    <Input placeholder='New password' type={'password'}/>
                  </FormControl>
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3}>
                    Send
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }

export default ForgotPassword;