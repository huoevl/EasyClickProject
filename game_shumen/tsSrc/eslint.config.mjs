import globals from "globals";
import pluginJs from "@eslint/js";


export default [
    {files: ["**/*.js"], languageOptions: {sourceType: "script"}},
    {languageOptions: {globals: globals.applescript}},
    pluginJs.configs.recommended,
    {ignores: ["libs"]},
    {
        rules: {
            "no-obj-calls": "off",
            "no-unused-vars": "off",
            "no-undef": "off",
            "no-unreachable": "off",
            "no-unused-private-class-members": "off",
        }
    }
]
;