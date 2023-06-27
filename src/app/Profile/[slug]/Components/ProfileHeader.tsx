import Logo from "@/app/Authentication/Components/Logo";
import React from "react";
import ProfileNav from "./ProfileNav";

export default function ProfileHeader() {
    return (
        <header className="flex justify-between px-32 pt-4">
            <Logo />
            <ProfileNav />
        </header>
    )
}