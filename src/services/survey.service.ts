import axios from "axios"
let baseUrl: any = import.meta.env.VITE_APP_BACKEND_BASE_PATH


export const storePrimarySurvey = (data: any): Promise<any> =>{
    return new Promise((resolve: any, reject: any) => {
        let url: string = baseUrl + "/survey/create"
        console.log(`add primary survey url: ${url}`)
        axios.post(url, data)
            .then((res:any) => {
                console.log("add res")
                console.log(res)
                resolve({ status: "success" })

            })
            .catch((error: any) => {
                console.log("error")
                console.log(error)
                reject({status: "error", error})
            })
    })
}

export const fetchUserPreferenceSurveys = (walletAddress: string, categories: string[]): Promise<any> =>{
    return new Promise((resolve: any, reject: any) => {
        let url: string = baseUrl + "/survey/fetchByUserPreference/" + walletAddress + "?"
        categories.map((category_id: string, index: number) => {
            if(index == 0) {
                url += "categories=" + category_id
            } else {
                url += "&categories=" + category_id
            }
        })
        console.log(`fetch User Preference Sureys: ${url}`)
        axios.get(url)
            .then((res:any) => {
                console.log("add res")
                console.log(res)
                resolve({ status: "success", surveys: res.data })

            })
            .catch((error: any) => {
                console.log("error")
                console.log(error)
                reject({status: "error", error})
            })
    })
}

export const fetchSurveyDetails = (survey_id: string): Promise<any> => {
    return new Promise((resolve: any, reject: any) => {
        let url: string = baseUrl + "/survey/fetchDetails/" + survey_id
        console.log(`url: ${url}`)
        axios.get(url)
            .then((res:any) => {
                console.log("res")
                console.log(res)
                resolve({ status: "success", survey: res.data })
            })
            .catch((error: any) => {
                console.log("error")
                console.log(error)
                reject({status: "error", error})
            })
    })
}