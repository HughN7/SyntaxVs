import { writable } from "svelte/store";
import { browser } from "$app/environment"

const siteTheme = writable(browser && (localStorage.getItem("theme") || "light"));
siteTheme.subscribe((value:any) => browser && (localStorage.setItem("theme", value)));

const codeTheme = writable(browser && (localStorage.getItem("codeTheme") || "ashes"));
codeTheme.subscribe((value:any) => browser && (localStorage.setItem("codeTheme", value)));


export {siteTheme, codeTheme}

export const LanguageList = writable([{
    id:0, 
    Language:"C"
}]); 

const defaultLang = {
    id: 1,
    created_at: "2022-11-24T06:04:07.612586+00:00",
    Language: "Python",
    Printing: "print(\"Hello There\")",
    Integer: "someVariable = 1",
    Decimal: "someVariable = 6.9",
    String: "someVariable = \"Hello There\""
}

export const ChosenLanguage1 = writable(defaultLang)
export const ChosenLanguage2 = writable(defaultLang)


/*
export const testPrint = writable(
    browser && (localStorage.getItem("testPrint") || "There")
);

testPrint.subscribe(
    (value:any) => browser && (localStorage.setItem("testPrint", value)
));
*/