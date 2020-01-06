//list of multiple choice coding questions stored as array of objects
//incude attributes for title, choices (as array of strings), and answer (as string)

var questions = [
    //HTML questions
    {
        title: "HTML is what type of language?",
        choices: ["Scripting Language", "Markup Language", "Programming Language", "Network Protocol"],
        answer: "Markup Language"
    },
    {
        title: "HTML uses ___",
        choices: ["User defined tags", "Pre-specified tags", "Fixed tags defined by the language", "Tags only for linking"],
        answer: "Fixed tags defined by the language"
    },
    {
        title: "What was the year in which HTML was first released?",
        choices: ["1993", "1980", "2000", "1995"],
        answer: "1993"
    },
    {
        title: "Fundamental HTML Block is known as ___________.",
        choices: ["HTML Body", "HTML Tag", "HTML Attribute", "HTML Element"],
        answer: "HTML Tag"
    },
    {
        title: "What should be the first tag in any HTML document?",
        choices: ["<head>", "<title>", "<document>", "<html>"],
        answer: "<html>"
    },
    {
        title: "What tag is used to display a picture in a HTML page?",
        choices: ["picture", "image", "img", "src"],
        answer: "img"
    },
    {
        title: "Tags and test that are not directly displayed on the page are written in _____ section.",
        choices: ["<head>", "<title>", "<document>", "<html>"],
        answer: "<head>"
    },
    //general programming questions
    {
        title: "Who is making the Web standards?",
        choices: ["Mozilla", "Microsoft", "The World Wide Web Consortium", "NVDIA"],
        answer: "Mozilla"
    },
    {
        title: "What does error 404 or Not Found error while accessing a URL mean",
        choices: ["The server could not find the requested URL", "Requested HTML file is not available", "The requested HTML file does not have sufficient permissions"],
        answer: "The server could not find the requested URL"
    },
    //css questions
    {
        title: "If you want to align text to the right side of an block element in a cascading style sheet (CSS) then which of the following property would you use?",
        choices: ["Right align", "Justify", "Left align", "Text align"],
        answer: "Mozilla"
    },
    //javascript questions
    {
        title: "In a Javascript Application what function can be used to send messages to users requesting a text input?",
        choices: ["display()", "alert()", "getOutput()", "prompt()"],
        answer: "prompt()"
    },
]