import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Category from "./pages/Category"
import Recipe from "./pages/Recipe"


export const routeConfig = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '*',
        component: NotFound
    },
    {
        path: '/category/:name',
        component: Category
    },
    {
        path: '/meal/:id',
        component: Recipe
    },

]