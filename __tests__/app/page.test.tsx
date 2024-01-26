describe('get specific date', () => {
    test('returns correct data when fetch is successful', () => {
        const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2024-01-25';
        const expected = "Harri Kiiskinen";
        var request = new XMLHttpRequest();
        request.open('GET', url, false);  // `false` makes the request synchronous
        request.send(null);

        if (request.status === 200) {
            const response = JSON.parse(request.responseText);
            expect(response.copyright).toEqual(expected);
        }
    });
});