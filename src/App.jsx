import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from './components/Footer'
import Header from './components/Header'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import { ChakraProvider } from "@chakra-ui/react"
import NotFound from "./pages/NotFound"

export default function App() {
    return (
        <ChakraProvider>
            <Router>
            <div className="app">
                <Header />
                <main className="container content ">
                    
                        <Routes>
                            <Route path="/" Component={Home} />
                            <Route path="/about" Component={About} />
                            <Route path="/contact" Component={Contact} />
                            <Route path='*' Component={NotFound} />
                        </Routes>
                    
                </main>
                <Footer />
            </div>
            </Router>
        </ChakraProvider>
    )

}