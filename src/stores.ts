import { writable } from "svelte/store";
import { browser } from "$app/environment"

const siteTheme = writable(browser && (localStorage.getItem("theme") || "light"));
siteTheme.subscribe((value:any) => browser && (localStorage.setItem("theme", value)));

const codeTheme = writable(browser && (localStorage.getItem("codeTheme") || "ashes"));
codeTheme.subscribe((value:any) => browser && (localStorage.setItem("codeTheme", value)));


export {siteTheme, codeTheme}

export type Language = {
    id:number
    language:string
    print:string
    string:string
    integer:string
    decimal:string
};

const DefaultLanguage:Language = {
    id: 0, language: "language", 
    print:"print statement", 
    integer:"0", 
    string:"some string", 
    decimal: "0.0"
}; 

export {DefaultLanguage}


const Python:Language = {
    id: 1,
    language: "Python",
    print: "print(\"hello\")",
    string: "someVariable = \"hello\"",
    integer: "someVariable = 1",
    decimal: "someVariable = 2.5"
}

const Java:Language = {
    id: 2, 
    language: "Java",
    print: "System.out.println(\"hello\");",
    string: "String someVariable = \"hello\";",
    integer: "int someVariable = 1;",
    decimal: "double someVariable = 2.5;"
}

const Cpp:Language = {
    id:3,
    language: "C++",
    print: "std::cout << \"hello\";",
    string: "std::string someVariable = \"hello\";",
    integer: "int someVariable = 1;",
    decimal: "double someVariable = 2.5;"
}

export const LanguageStore = writable([
    Python, Java, Cpp
]); 

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

export const ChosenLanguage1ID = writable(0); 
export const ChosenLanguage2ID = writable(0); 
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