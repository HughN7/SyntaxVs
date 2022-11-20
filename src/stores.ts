import { writable } from "svelte/store";
import { browser } from "$app/environment"


const localTheme = localStorage.getItem('theme')
export const theme = writable( localTheme || "ashes")
//export const theme = writable("ashes")
theme.subscribe((value) => {localStorage.setItem('theme', value)})

//theme.subscribe((val) => {localStorage.setItem('theme', val)})

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
])
