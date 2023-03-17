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
    Comments: "#This is a comment", 
    Integer: "someVariable = 1",
    Decimal: "someVariable = 6.9",
    String: "someVariable = \"Hello There\"",
    Conditional: "if not(2 > 1 and 3 > 1) or \"Green\" == \"green\"):\n     print(\"Conditiona\")", 
    Loop: "for cookies_count in range(0,7):\n       print(\"Eating cookie\", cookies_count)",
    Array: "N/A - See Numpy Arrays",
    List: "some_list = [\"can store different datatypes\", 1, False, [\"another\", \"list\"]]"
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