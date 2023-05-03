/* eslint-disable ui-testing/no-disabled-tests */
describe('Metamask', () => {
  context('Test commands', () => {
    // todo: clear the state of extension and test different combinations of setupMetamask with private key & custom network
    it(`setupMetamask should finish metamask setup using secret words`, () => {
      cy.setupMetamask(
        'test test test test test test test test test test test junk',
        'goerli',
        'Tester@1234',
      ).then(setupFinished => {
        expect(setupFinished).to.be.true;
      });
    });
  });
});
