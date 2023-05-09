import { writable } from "svelte/store";
import { browser } from "$app/environment"

const siteTheme = writable(browser && (localStorage.getItem("theme") || "light"));
siteTheme.subscribe((value:any) => browser && (localStorage.setItem("theme", value)));

const codeTheme = writable(browser && (localStorage.getItem("codeTheme") || "ashes"));
codeTheme.subscribe((value:any) => browser && (localStorage.setItem("codeTheme", value)));

const LanguageList = writable([
{
    id:1, 
    Language:"Python",
},
{
    id:2, 
    Language:"Java",
},
]); 

/**
    ,{
        id:2, 
        Language:"Java"
    }
 */

const defaultPythonLang = {
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

const defaultLang = {
    id: 1,
    created_at: "",
    Language: "",
    Language_Info: "", 
    Printing: "",
    Printing_Info: "", 
    Comments: "", 
    Comments_Info: "",
    Integer: "",
    Integer_Info: "", 
    Decimal: "",
    Decimal_Info: "",
    String: "",
    String_Info: "",
    Conditional: "", 
    Conditional_Info: "", 
    Loop: "",
    Loop_Info: "",
    Array: "",
    Array_Info: "",
    List: "",
    List_Info: "", 
    Map: "", 
    Map_Info: "", 
    Class: "", 
    Class_Info: "", 
    Full_Example: ""
}

export type Lang = {
    id: number;
    created_at: string;
    Language: string;
    Language_Info: string;
    Printing: string;
    Printing_Info: string;
    Comments: string;
    Comments_Info: string;
    Integer: string;
    Integer_Info: string;
    Decimal: string,
    Decimal_Info: string,
    String: string,
    String_Info: string,
    Conditional: string, 
    Conditional_Info: string, 
    Loop: string,
    Loop_Info: string,
    Array: string,
    Array_Info: string,
    List: string,
    List_Info: string, 
    Map: string, 
    Map_Info: string, 
    Class: string, 
    Class_Info: string, 
    Full_Example: string
}

const ChosenLanguage1 = writable(defaultLang)
const ChosenLanguage2 = writable(defaultLang)

export {siteTheme, codeTheme, LanguageList, defaultLang, ChosenLanguage1, ChosenLanguage2}


/*
export const testPrint = writable(
    browser && (localStorage.getItem("testPrint") || "There")
);

testPrint.subscribe(
    (value:any) => browser && (localStorage.setItem("testPrint", value)
));
*/