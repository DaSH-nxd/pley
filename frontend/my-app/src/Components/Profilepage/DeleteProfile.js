import React from 'react';
import AuthService from '../../Services/auth-service.js';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import {  AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure

} from '@chakra-ui/react'

const Delete = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const navigate = useNavigate();

    const base_url = "http://localhost:3002/user";
      const options = {
        headers: {
            "token" : AuthService.getCurrentUser()
        }
      }

    const handleClick = () => {
      axios
        .delete(`${base_url}/delete`, options)
        .then((res) => {
            console.log(res.data);
        })
        .catch((error) => console.log("error with axios delete"));
        
        localStorage.removeItem("user");
        navigate("/");
        window.location.reload();
    }

    return (
      <>
        <Button colorScheme='red' onClick={onOpen}>
          Delete Account
        </Button>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete Customer
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={() => handleClick()} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
}

export default Delete;