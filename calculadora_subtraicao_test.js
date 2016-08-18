
Feature('Subtrair');

Before((I) => {
	I.amInsideAngularApp();
});

Scenario('gerando valor positivo', (I) => {
	I.amOnPage('/');
	I.fillField({model: 'first'}, 986);
	I.selectOption({model:'operator'},'-');
	I.fillField({model: 'second'}, 86);
	I.pressKey('Enter');
	I.waitForText(900, 'h2');
	I.saveScreenshot('subtracaoComsucesso.png');
});


Scenario('gerando valor negativo', (I) => {
	I.amOnPage('/');
	I.fillField({model: 'first'}, 10);
	I.selectOption({model:'operator'},'-');
	I.fillField({model: 'second'}, 35);
	I.pressKey('Enter');
	I.waitForText(-25, 'h2');
	I.saveScreenshot('subtracaoResultadoNegativo.png');
});
	