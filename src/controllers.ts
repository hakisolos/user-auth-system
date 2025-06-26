import { supabase } from "./client";

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    console.log("an error occured");
  }
  console.log("user signed in successfully");
  return { success: true, user: data.user };
}

export async function login(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    console.log("an error occured");
    return { success: false, error: error };
  }
  console.log("user logged in successfully");
  return { success: true, user: data.user };
}

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Logout Error:", error.message);
    return { success: false, message: error.message };
  }

  console.log("User signed out successfully.");
  return { success: true, message: "Signed out." };
}

export async function changeEmail(newMail: string) {
  if (!newMail) throw new Error(`new email required`);
  const { data, error } = await supabase.auth.updateUser({
    email: newMail,
  });
  if (error) {
    console.log(error);
    return { success: false, error: error };
  }
  console.log("change of email in progress");
  return {
    success: true,
    message: "please check your email for verifications",
  };
}
export async function getUser () {
    const {data} = await supabase.auth.getUser()
    if(!data) return {success: false, message: "no user found"}
    console.log("user found")
    return {success: true, message: data.user}
    
}

// lets say maybe your using otp to handle authentication instead of password which is much cooler >_<
export async function verifyOtp(email: string, options = {}) {
  if (!email) throw new Error(`email required`);

  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options, // 👈 pass options object if provided
  });

  if (error) {
    console.error(error);
    return { success: false, error: error.message ?? String(error) };
  }

  return {
    success: true,
    message: "OTP sent successfully",
    data,
  };
}


