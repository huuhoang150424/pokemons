import { router } from "../interface"
import Home from "../page/Home"
import  PokemonDetail  from "../page/PokemonDetail"


const PublicRouters:router[]=[
    {
        path: '/',
        component: Home
    },
    {
        path: '/detail-:id',
        component: PokemonDetail
    }
]
export {PublicRouters}