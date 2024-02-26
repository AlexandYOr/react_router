import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from './components/Footer'
import Header from './components/Header'
import { ChakraProvider, Stack } from "@chakra-ui/react"
import { routeConfig } from "./routeConfig"

export default function App() {
    return (
        <ChakraProvider>
            <Router basename="/react-router">
                <div className="app">
                    <Stack wrap='wrap' justifyContent='center' direction='row' spacing='24px'>
                        <Header />
                        <main className="container content ">
                            <Routes>

                                {routeConfig.map((item) => {
                                    return <Route key={item.component + 'Id'} path={item.path} Component={item.component} />
                                })}
                            </Routes>
                        </main>
                        <Footer />
                    </Stack>
                </div>
            </Router>
        </ChakraProvider>
    )
}