import React, { useState } from 'react';
import authService from "../../Services/auth-service";

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
import axios from 'axios';

const ForgotPassword = () => {
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.1000'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    const [email, setEmail] = useState("");
    const [oldpass, setOldpass] = useState("");
    const [newpass, setNewpass] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

      
        const initialRef = React.useRef()

    const changePass = async () => {
      
      const data = {
        "email": email,
        "pass1": oldpass,
        "pass2": newpass
      };

      const config = {
          headers : {
            "token" : authService.getCurrentUser()
        }
      };

      axios
      .put("http://localhost:3002/user/password",
        data,
        config
        )
        .then((res) => console.log(res))
        .catch((err) => console.log("password change failed"));

      return onClose();
      //onCLose
    }

        return (
          <>
            <Text onClick={() => {
                setOverlay(<OverlayOne/>)
                onOpen()}}>Change Password</Text>
                
      
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
                    <Input id="email" 
                          value={email} 
                          ref={initialRef} 
                          placeholder='Enter your email' 
                          onChange = {(d) => setEmail(d.target.value)}
                          />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>Type New Password</FormLabel>
                    <Input value={oldpass}
                           placeholder='New password' 
                           type={'password'}
                           onChange = {(d) => setOldpass(d.target.value)}
                           />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Retype New Password</FormLabel>
                    <Input value={newpass} 
                            placeholder='Retype new password' 
                            type={'password'} 
                            onChange = {(d) => setNewpass(d.target.value)}
                            />
                  </FormControl>
                </ModalBody>
      
                <ModalFooter>
                  <Button onClick={() => changePass()} colorScheme='blue' mr={3}>
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