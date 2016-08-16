
Feature('Somar');

Before((I) => {
	I.amInsideAngularApp();
});

Scenario('Somar com sucesso', (I) => {
	I.amOnPage('/');
	I.fillField({model: 'first'}, 3);
	I.selectOption({model:'operator'},'+');
	I.fillField({model: 'second'}, 5);
	I.pressKey('Enter');	
	I.waitForText(8, 2, 'h2');	
	I.saveScreenshot('somaComsucesso.png');
});


Scenario('Somar com todos os operandos', (I) => {
	I.amOnPage('/');
	I.fillField({model: 'first'}, 3);
	I.selectOption({model:'operator'},'+');	
	I.click('Go');
	I.waitForText(NaN, 'h2');	
	I.saveScreenshot('somaComTodosOsOperandos.png');
});

Scenario('Somar apenas com números', (I) => {
	I.amOnPage('/');
	I.fillField({model: 'first'}, 3);
	I.selectOption({model:'operator'},'+');	
	I.fillField({model: 'second'}, '@');
	I.click('Go');
	I.waitForText(NaN,'h2');
	I.saveScreenshot('somaApenasComNumeros.png');
});
