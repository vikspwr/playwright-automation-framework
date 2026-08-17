
export const loginPageLocators = {

    usernameInput: "#user-name",
    passwordInput: "#password",
    loginButton: "#login-button",
    loginLogo: "div.login_logo",
    emptyCredentialsErrorMessage: { selector: "h3", options: { hasText: /Username is required/ } },
    invalidCredentialsErrorMessage: { selector: "h3", options: { hasText: /Username and password do not match/ } },

}