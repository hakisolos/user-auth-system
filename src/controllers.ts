import { supabase } from "./client";

export async function signUp(email: string, password: string){
    const {data, error} = await supabase.auth.signUp({email, password})
    if(error) {
        console.log("an error occured")
    }
    console.log("user signed in successfully")
    return {success: true,user: data.user}
}
export async function login(email: string, password: string) {
    const {data, error} = await supabase.auth.signInWithPassword({email: email, password: password})
    if(error) {
        console.log("an error occured")
        return {success: false, error: error
        }
    }
    console.log("user logged in successfully")
    return {success: true, user: data.user}
}
export async function logoutUser() {
	const { error } = await supabase.auth.signOut()

	if (error) {
		console.error("Logout Error:", error.message)
		return { success: false, message: error.message }
	}

	console.log("User signed out successfully.")
	return { success: true, message: "Signed out." }
}