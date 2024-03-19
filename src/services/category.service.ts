import axios from "axios"
let baseUrl: any = import.meta.env.VITE_APP_BACKEND_BASE_PATH

export const getAllCategories = (): Promise<any> => {
    return new Promise((resolve: any, reject: any) => {
        let url: string = baseUrl + "/category/all"
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

export const getAllActiveCategory = (): Promise<any> => {
    return new Promise((resolve: any, reject: any) => {
        let url: string = baseUrl + "/category/all-active"
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

export const addNewCategory = (data: any): Promise<any> => {
    return new Promise((resolve: any, reject: any) => {
        let url: string = baseUrl + "/category/add-category"
        console.log(`add category url: ${url}`)
        axios.post(url, data)
            .then((res:any) => {
                console.log("add res")
                console.log(res)
                resolve({ status: "success", category: res.data })

            })
            .catch((error: any) => {
                console.log("error")
                console.log(error)
                reject({status: "error", error})
            })
    })
}

export const updateCategory = (data: any): Promise<any> => {
    return new Promise((resolve: any, reject: any) => {
        let url: string = baseUrl + "/category/update-category"
        console.log(`url: ${url}`)
        axios.put(url, data)
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