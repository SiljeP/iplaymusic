"use server"
import { cookies } from "next/headers";

export default async function setLoginStatusCookie(isLoggedIn) {
    cookies().set(
        "isLoggedIn",
        isLoggedIn ? "true" : "false",
        { secure: true, httpOnly: true }
    );
}