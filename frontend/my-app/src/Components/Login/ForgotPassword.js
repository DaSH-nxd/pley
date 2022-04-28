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
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        const initialRef = React.useRef()
      
        const OverlayOne = () => (
            <ModalOverlay
              bg='blackAlpha.300'
              backdropFilter='blur(10px) hue-rotate(90deg)'
            />
          )
        return (
          <>
            <Text onClick={onOpen}>Forgot Password?</Text>
      
            <Modal
              initialFocusRef={initialRef}
              isOpen={isOpen}
              onClose={onClose}
            >
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