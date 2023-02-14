const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        "baseUrl": "https://google.com/",
        "video": false,
        "reporterOptions": {
            "mochaFile": "cypress/results/tests-[hash].xml",
            "toConsole": true
        },
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});