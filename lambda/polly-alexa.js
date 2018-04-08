const Alexa = require('alexa-sdk');

exports.handler = function (event, context) {
	const alexa = Alexa.handler(event, context);

	alexa.registerHandlers(handlers);
	alexa.execute();
};

const handlers = {
	'LaunchRequest': function () {
		this.emit('GetNewFactIntent');
	},

	'GetNewFactIntent': function () {
		const say = 'Hello Eli! Lets begin studying for our exam!' + getFact();
		this.emit(':tell', say);
	},

	'AMAZON.HelpIntent': function () {
		this.emit(':ask', 'Learn everything you need to know about Amazon Web Services to pass your exam by listening to your very own study notes. You can start by saying, Ryan help me study.', 'try again');
	},

	'AMAZON.CancelIntent': function () {
		this.emit(':tell', 'Goodbye Cloud Gurus');
	},

	'AMAZON.StopIntent': function () {
		this.emit(':tell', 'Goodbye Cloud Gurus');
	}
};

//  helper functions  ===================================================================


function getFact() {
	const myFacts = [
		'<audio src="https://s3.amazonaws.com/eerichmond-polly/2987cfb7-5a1a-4a31-be64-816130f59f72.mp3"/>',
		'<audio src="https://s3.amazonaws.com/eerichmond-polly/0a04b3fa-6502-44ad-a0af-7a8c9f7e3adb.mp3"/>',
		'<audio src="https://s3.amazonaws.com/eerichmond-polly/24ef335b-c1ec-4d1e-b6d3-7c58b50fd98a.mp3"/>'
	];

	return randomPhrase(myFacts);
}

function randomPhrase(array) {
	const i = Math.floor(Math.random() * array.length);
	return (array[i]);
}