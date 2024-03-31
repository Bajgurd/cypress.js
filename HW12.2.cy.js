
describe('Форма логина и пароля qa.studio', function () {
    
it('Правильный логин и пароль', function () {
cy.visit('https://login.qa.studio/')
cy.get('#mail').type('german@dolnikov.ru')
cy.get('#loginButton').should('be.disabled')
cy.get('#pass').type('iLoveqastudio1')
cy.get('#loginButton').should('be.enabled')
cy.get('#loginButton').click()
cy.get('#messageHeader').contains('Авторизация прошла успешно')
cy.get('#messageHeader').should('be.visible')
cy.get('#exitMessageButton > .exitIcon').should('be.visible') })

it('Проверка логики восстановления пароля', function () {
cy.visit('https://login.qa.studio/')
cy.get('#mail').type('german@dolnikov.ru')
cy.get('#loginButton').should('be.disabled')
cy.get('#pass').type('iLoveqastudio')
cy.get('#loginButton').should('be.enabled')
cy.get('#loginButton').click()
cy.get('#messageHeader').contains('Такого логина или пароля нет')
cy.get('#messageHeader').should('be.visible')
cy.get('#exitMessageButton > .exitIcon').should('be.visible') })

it('Проверка логики восстановления пароля 2', function () {
cy.visit('https://login.qa.studio/')
cy.get('#mail').type('germa@dolnikov.ru')
cy.get('#loginButton').should('be.disabled')
cy.get('#pass').type('iLoveqastudio1')
cy.get('#loginButton').should('be.enabled')
cy.get('#loginButton').click()
cy.get('#messageHeader').contains('Такого логина или пароля нет')
cy.get('#messageHeader').should('be.visible')
cy.get('#exitMessageButton > .exitIcon').should('be.visible') })

it('Проверка валидации', function () {
cy.visit('https://login.qa.studio/')
cy.get('#mail').type('germandolnikov.ru')
cy.get('#loginButton').should('be.disabled')
cy.get('#pass').type('iLoveqastudio1')
cy.get('#loginButton').should('be.enabled')
cy.get('#loginButton').click()
cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
cy.get('#messageHeader').should('be.visible')
cy.get('#exitMessageButton > .exitIcon').should('be.visible') })

it('Проверка на регистр', function () {
cy.visit('https://login.qa.studio/')
cy.get('#mail').type('gerMan@dOlnikov.ru')
cy.get('#loginButton').should('be.disabled')
cy.get('#pass').type('iLoveqastudio1')
cy.get('#loginButton').should('be.enabled')
cy.get('#loginButton').click()
cy.get('#messageHeader').contains('Такого логина или пароля нет')
cy.get('#messageHeader').should('be.visible')
cy.get('#exitMessageButton > .exitIcon').should('be.visible') })

it('Проверка на регистр', function () {
cy.visit('https://login.qa.studio/')
cy.get('#forgotEmailButton').should('be.enabled')
cy.get('#forgotEmailButton').click()
cy.get('#restoreEmailButton').should('be.enabled')
cy.get('#mailForgot').type('german1@dolnikov.ru')
cy.get('#restoreEmailButton').click()
cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')
cy.get('#messageHeader').should('be.visible')
cy.get('#exitMessageButton > .exitIcon').should('be.visible') })

})

describe('Покупка аватара', function () {                               // название набора тестов
   it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
        cy.visit('https://pokemonbattle.me/');                          // переходим на сайт https://pokemonbattle.me/
        cy.get('input[type="email"]').type('user@yandex.ru');      // вводим логин
        cy.get('input[type="password"]').type('password');    // вводим пароль
        cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
        cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку Магазин
        cy.get('.available > button').first().click();                  // кликаем по кнопке Купить у первого доступного аватара
        cy.get('.credit').type('4620869113632996');                     // вводим номер карты
        cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
        cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
        cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
    });
});