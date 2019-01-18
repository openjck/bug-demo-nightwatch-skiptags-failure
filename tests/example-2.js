module.exports = {
    before: browser => {
        browser.url('https://www.google.com');
    },

    'Page <title> is correct': browser => {
        browser.assert.title('Google');
    },
};
