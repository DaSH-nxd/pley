import {Text, HStack, Divider} from '@chakra-ui/react'

const Line = () => {
    return (
        <HStack>
            <Divider orientation='horizontal'/>
            <Text>
                OR
            </Text>
            <Divider/>
        </HStack>
    )
}

export default Line;