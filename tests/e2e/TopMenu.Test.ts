Feature('Top Menu')

Before(({ I }) => {
    I.amOnPage('/')

    I.acceptCookiesPolicy()
})

Scenario('clicking "MAGYAR FOCI" should reveal "NB I"',async ({ I }) => {
    const hungarianFootballMenuItem = locate('li').withText('Magyar foci');

    I.click(hungarianFootballMenuItem);

    I.see('NB I');
})
