import React, {createContext, useReducer} from "react"
import category_app_reducer from "./Category.reducer"
// Data.
import general_knowledge from "./../../images/gk-pic.png"
import geography_pic from "./../../images/geography-pic.png"
import history_pic from "./../../images/history-pic.png"
import mathematics_pic from "./../../images/mathematics-pic.png"
import video_game_pic from "./../../images/video-games-pic.png"
import computer_pic from "./../../images/computer-pic.png"

// const categories: any = [
//     {id:9, name:"General Knowledge", image: general_knowledge},
//     {id:22, name:"Geography", image: geography_pic},
//     {id:23, name:"History", image: history_pic},
//     {id:15, name:"Video Games", image: video_game_pic},
//     {id:19, name:"Mathematics", image: mathematics_pic},
//     {id:18, name:"Computers", image: computer_pic}
// ]

const categories = {
    general_knowledge:{id:9, name:"General Knowledge", image: general_knowledge},
    geogprahy: {id:22, name:"Geography", image: geography_pic},
    history: {id:23, name:"History", image: history_pic},
    video_games: {id:15, name:"Video Games", image: video_game_pic},
    mathematics: {id:19, name:"Mathematics", image: mathematics_pic},
    computers:  {id:18, name:"Computers", image: computer_pic}
}

const initialState = {
    categories
}

export const CategoryContext = createContext(initialState)

export const CategoryProvider = (props:any) => {
    const [state, dispatch] = useReducer(category_app_reducer, initialState)

    return(
        <CategoryContext.Provider value={
            {
                categories: state.categories
            }
        }
        >
            {props.children}
        </CategoryContext.Provider>
    )  
}
