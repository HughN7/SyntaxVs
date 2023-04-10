import { writable } from "svelte/store";
import { browser } from "$app/environment"

const siteTheme = writable(browser && (localStorage.getItem("theme") || "light"));
siteTheme.subscribe((value:any) => browser && (localStorage.setItem("theme", value)));

const codeTheme = writable(browser && (localStorage.getItem("codeTheme") || "ashes"));
codeTheme.subscribe((value:any) => browser && (localStorage.setItem("codeTheme", value)));


export {siteTheme, codeTheme}

export const LanguageList = writable([{
    id:0, 
    Language:"Python"
},{
    id:1, 
    Language:"Java"
}]); 

const defaultLang = {
    id: 1,
    created_at: "2022-11-24T06:04:07.612586+00:00",
    Language: "Python",
    Language_Info: "", 
    Printing: "print(\"Hello There\")",
    Printing_Info: "", 
    Comments: "#This is a comment", 
    Comments_Info: "",
    Integer: "someVariable = 1",
    Integer_Info: "", 
    Decimal: "someVariable = 6.9",
    Decimal_Info: "",
    String: "someVariable = \"Hello There\"",
    String_Info: "",
    Conditional: "if not(2 > 1 and 3 > 1) or \"Green\" == \"green\"):\n     print(\"Conditiona\")", 
    Conditional_Info: "", 
    Loop: "for cookies_count in range(0,7):\n       print(\"Eating cookie\", cookies_count)",
    Loop_Info: "",
    Array: "N/A - See Numpy Arrays",
    Array_Info: "",
    List: "some_list = [\"can store different datatypes\", 1, False, [\"another\", \"list\"]]",
    List_Info: "", 
    Map: "map_called_dictionary = {1: \"dictionary is ordered\", 2: \"if using py 3.7 >\", \"hello there\": \"general kenobi!\"}", 
    Map_Info: "", 
    Class: "", 
    Class_Info: "", 
    Full_Example: ""
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