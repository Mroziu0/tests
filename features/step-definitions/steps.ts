import { Given, When, Then } from '@wdio/cucumber-framework';

import { LoginFunctionality } from '../functionalities/login.functionality';
import { MainFunctionality } from '../functionalities/main.functionality';

const login = new LoginFunctionality();
const main = new MainFunctionality();

Given(/^I am on the main page$/, async () => {
    await login.open();
    await main.waitUntilPageWillLoad();
});

When(/^I login with candidatex and qa-is-cool$/, async () => {
    await login.open();
});

Then(/^I should see a main screen$/, async () => {
    await main.waitUntilPageWillLoad();
});

