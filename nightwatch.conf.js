module.exports = {
    src_folders: ['./tests'],

    selenium: {
        server_path: require('selenium-server-standalone-jar').path,
        start_process: true,
        log_path: '',
        host: '127.0.0.1',
        port: 4444
    },

    test_settings: {
        default: {
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--headless'],
                },
            }
        },
    },
};
