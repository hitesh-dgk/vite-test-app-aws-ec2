import axios from "axios"
let baseUrl: any = import.meta.env.VITE_APP_BACKEND_BASE_PATH

export const fetchUserPreferenceCategories = (walletAddress: string): Promise<any> => {
    return new Promise((resolve: any, reject: any) => {
        let url: string = baseUrl + "/user/fetchUserPreferenceCategories/"+walletAddress
        console.log(`url: ${url}`)
        axios.get(url)
            .then((res:any) => {
                console.log("res")
                console.log(res)
                resolve({ status: "success", categories: res.data })
            })
            .catch((error: any) => {
                console.log("error")
                console.log(error)
                reject({status: "error", error})
            })
    })
}
