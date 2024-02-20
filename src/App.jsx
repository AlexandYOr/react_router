import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from './components/Footer'
import Header from './components/Header'
import { ChakraProvider } from "@chakra-ui/react"
import { routeConfig } from "./routeConfig"

export default function App() {
    return (
        <ChakraProvider>
            <Router>
                <div className="app">
                    <Header />
                    <main className="container content ">
                        <Routes>
                            {routeConfig.map((item) => {
                                return <Route key={item.component + 'Id'} path={item.path} Component={item.component} />
                            })}
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ChakraProvider>
    )
}