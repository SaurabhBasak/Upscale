module.exports = function (api) {
    api.cache(true);

    const presets = ["module:metro-react-native-babel-preset"];
    const plugins = [
        [
            "module:react-native-dotenv",
            {
                moduleName: "@env",
                path: ".env",
                blacklist: null,
                whitelist: null,
                safe: false,
                allowUndefined: true,
            },
        ],
    ];

    return {
        presets,
        plugins,
    };
};
