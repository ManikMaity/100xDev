import axiosInstance from "@/config/axiosInstace";

export async function signinUserService({email, password} : {email: string, password: string}) {
    try {
        const response = await axiosInstance.post("/auth/signin", {email, password});
        return response.data;
    }
    catch (error: any) {
        throw error?.response?.data;
    }
}


export async function signupUserService({username, email, password} : {username: string, email: string, password: string}) {
    try {
        const response = await axiosInstance.post("/auth/signup", {username, email, password});
        return response.data;
    }
    catch(error : any){
        throw error?.response?.data;
    }
}