import {atom, useRecoilState, useSetRecoilState, } from 'recoil'

const AuthState = atom({
    key: "AuthState",
    default: false
})

const AuthUsername = atom({
    key: "AuthUsername",
    default: "",
})

const AuthFullname = atom({
    key: "AuthFullname",
    default: ""
})

const AuthRole = atom({
    key: "AuthRole",
    default: ""
})

export const useAuthState = () => useRecoilState(AuthState);
export const setAuthState = () => useSetRecoilState(AuthState);

export const useAuthUsername = () => useRecoilState(AuthUsername);
export const setAuthUsername = () => useSetRecoilState(AuthUsername);

export const useAuthFullname = () => useRecoilState(AuthFullname);
export const setAuthFullname = () => useSetRecoilState(AuthFullname);

export const useAuthRole = () => useRecoilState(AuthRole);
export const setAuthRole = () => useRecoilState(AuthRole);