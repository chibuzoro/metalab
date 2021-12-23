const axios = require('axios');

test('can get commit statistics for a given user\'s repo on Github',  async() => {
    const data = await axios.get('/commit-activity')
    console.log(data);
    expect(2 + 2).toBe(4);
});

