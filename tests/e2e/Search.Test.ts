Feature('Search')

Before(({ I }) => {
    I.amOnPage('/')

    I.acceptCookiesPolicy()
})

Scenario('should yield any result',async ({ I }) => {
    let searchTextarea = locate('textarea').withAttr({ title: 'Keresés' });

    I.fillField(searchTextarea, 'wikipedia');

    I.pressKey('Enter');

    I.see('wikipedia.org');
})
