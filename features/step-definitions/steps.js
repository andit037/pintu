const { Given, When, Then } = require('@cucumber/cucumber');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const RegisterPage = require('../pageobjects/register.page');
const DashboardPage = require('../pageobjects/dashboard.page');

Given(/^I am on the register page$/, async() => {
	await RegisterPage.registerPage();
});


When(/^I register with (.*) and (.*) and (.*) and (.*)$/, async(name,email,password,confirm_password) => {
	await RegisterPage.registerData(name,email,password,confirm_password)
});


When(/^I insert new data with (.*) and (.*) and (.*) and (.*)$/, async(name,email,password,confirm_password) => {
	await RegisterPage.registerData(name,email+Date.now()+'@gmail.com',password,confirm_password)
});


When(/^I submit data register$/, async() => {
	await RegisterPage.submitRegister();
});


Then(/^I should see a success message saying (.*)$/, async (message) => {
	await expect(RegisterPage.flashMessage).toBeExisting();
    await expect(RegisterPage.flashMessage).toHaveTextContaining(message);
});


Then(/^I should see a error message saying (.*)$/, async(message) => {
	await expect(RegisterPage.errorMessage).toBeExisting();
    await expect(RegisterPage.errorMessage).toHaveTextContaining(message);
});


Then(/^I see a error message saying (.*) on login page$/, async (message) => {
	await expect(LoginPage.errorMessage).toBeExisting();
    await expect(LoginPage.errorMessage).toHaveTextContaining(message);
});


Given(/^I am on the login page$/, async() => {
	await LoginPage.loginOK()
});


When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await LoginPage.login(username, password)
});


When(/^I submit data login$/, async() => {
	await LoginPage.loginSubmit()
});


When(/^I go to login page$/, async() => {
	await LoginPage.redirect2Login()
});


Then(/^I should see a error message saying (.*) on login page$/, async(message) => {
	await expect(RegisterPage.errorMessage).toBeExisting();
    await expect(RegisterPage.errorMessage).toHaveTextContaining(message);
});


Then(/^I should see a flash message saying (.*) on login page$/, async(message) => {
	await expect(RegisterPage.flashMessage).toBeExisting();
    await expect(RegisterPage.flashMessage).toHaveTextContaining(message);
});


Then(/^I should see my name (.*) and my email (.*) and my password (.*) on dashboard$/, async(name,email,password) => {
	await expect(DashboardPage.textName).toBeExisting();
    await expect(DashboardPage.textName).toHaveTextContaining(name);

	await expect(DashboardPage.textEmail).toBeExisting();
    await expect(DashboardPage.textEmail).toHaveTextContaining(email);

	await expect(DashboardPage.textPassword).toBeExisting();
    await expect(DashboardPage.textPassword).toHaveTextContaining(password);
});

