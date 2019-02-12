module.exports = {
    "defaultSeverity": "error",
    "extends": "tslint-config-airbnb",
    "rules": {
        "trailing-comma": [true, {"multiline": "never", "singleline": "never"}],
        "no-irregular-whitespace": true,
        "max-line-length": [true, 160]
    },
    "jsRules": true,
    "rulesDirectory": []
}