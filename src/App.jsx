import React from "react"
import Footer from './components/Footer'
import Header from './components/Header'
import Preloader from "./components/Preloader"
import { ChakraProvider } from "@chakra-ui/react"

export default function App() {
    return (
      <ChakraProvider>
        <div className="app">
          <Header />
            <Preloader />
          <Footer />
        </div>
      </ChakraProvider>
    )
  
  }