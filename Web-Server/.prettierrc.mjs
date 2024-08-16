/**
 * @type {import("prettier").Config}
 */
const config = {
    plugins: [

        "prettier-plugin-tailwindcss",
    ],
    trailingComma: "es5",
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    attributeGroups: ["$DEFAULT", "^data-"],
    attributeSort: "ASC",
};

export default config;
