import chai from 'chai';
import sinon from 'sinon';

import responses from '../../src/commands/fun/responses';


let sandbox;
chai.should();

describe('responses', () => {
  before(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(Math, 'random', () => 0.6787224733270705);
  });

  after(() => sandbox.restore());

  describe('drama', () => {
    it('should return drama image at index 3', () => {
      return responses.drama({}, {}, '3')
        .then(res => res.should.equal('http://i.imgur.com/GbIaoT0.gif'));
    });

    it('should return a random drama image', () => {
      return responses.drama({}, {}, '1000')
        .then(res => res.should.equal('http://i.imgur.com/OX2r7f3.gif'));
    });
  });

  describe('emoji', () => {
    it('should return emoji text from index 2', () => {
      return responses.emoji({}, {}, '2')
        .then(res => res.should.equal('πππππΊπΊπΊNOW WATCH ME SPOOKπππNOW WATCH ME DOOT DOOTπΊπΊπΊπΊNOW WATCH ME SPOOK SPOOKππππππΊπΊπΊπΊWATCH ME DOOT DOOTππΊπΊππΊππΊπΊπ'));
    });

    it('should return random emoji text', () => {
      return responses.emoji({}, {}, '1000')
        .then(res => res.should.equal('πππππππππππsuccess shit success sHit β that someππto success shit rightππthereπππrightβthere ββif i do bless up my self π i do bless up π thats another one right there right there (chorus: Κ³αΆ¦α΅Κ°α΅ α΅Κ°α΅Κ³α΅) mMMMMα·ΠππππΠO0Πΰ¬ OOOOOΠΰ¬ ΰ¬ Ooooα΅α΅α΅α΅α΅α΅α΅α΅α΅πππππππππππsuccess shit'));
    });
  });

  describe('quote', () => {
    it('should return quote 4', () => {
      return responses.quote({}, {}, '4')
        .then(res => res.should.equal('How is it one careless match can start a forest fire, but it takes a whole box to start a campfire?'));
    });

    it('should return a random quote', () => {
      return responses.quote({}, {})
        .then(res => res.should.equal('My favorite machine at the gym is the vending machine.'));
    });
  });
});
