import { writable } from "svelte/store";

export const LanguageStore = writable([
    {
        id: 1,
        language: "python",
        print: "print(\"hello\")",
        string: "someVariable = \"hello\"",
        integer: "someVariable = 1",
        decimal: "someVariable = 2.5"
    },
    {
        id: 2, 
        language: "java",
        print: "System.out.println(\"hello\")",
        string: "String someVariable = \"hello\"",
        integer: "int someVariable = 1",
        decimal: "double someVariable = 2.5"
    }
])