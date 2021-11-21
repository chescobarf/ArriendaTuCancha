import { Flex, Box, Button, Spacer, useColorModeValue } from '@chakra-ui/react'
import { ColorModeSwitcher } from 'ColorModeSwitcher'
import Home from 'components/Home/Home';
import { Logo } from 'Logo';
import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function Navbar() {


    const bgGradient = useColorModeValue
        ("linear(to-l, #81E6D9, #63B3ED)", "linear(to-l, #319795, #2A4365)")

    return (
        <Router>
            <Flex
                alignItems="center"
                w="100%"
                justifyContent="space-between"
                mx="auto"
                p="3"
                bgGradient={bgGradient}
            >
                <Box>
                    <Button variant="ghost" mr="4">
                        <Logo />
                        <Link to="/">Inicio</Link>
                    </Button >
                    <Button variant="ghost" mr="4">
                        <Link to="/canchas">Canchas</Link>
                    </Button >
                </Box>
                <Spacer />
                <Box>
                    <Button variant="ghost" mr="4">
                        <Link to="/">Login</Link>
                    </Button >
                    <Button variant="ghost" >
                        <Link to="/">Mis Arriendos</Link>
                    </Button >
                    <ColorModeSwitcher justifySelf="flex-end" />
                </Box>
            </Flex >




            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/canchas" element={<Cancha />} />
            </Routes>



        </Router >
    )

    function Cancha() {
        return <h2>Cancha</h2>;
    }
}

export default Navbar
