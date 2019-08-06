const common = {
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "json",
        "node"
    ],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(s?css|sass)$": "<rootDir>/__mocks__/styleMock.js"
    }
};

module.exports = {
    ...common,
    collectCoverage: true,
    transformIgnorePatterns: ["/.*@tensorflow\\/.*\\.ts/"],
    testMatch: ['**/*.(spec|test).[jt]s?(x)'],
};
