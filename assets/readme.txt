start mongodb
cd to main folder
npm install
npm start
======================
to view list of conversations
http://localhost:2806/api/conversation/
sample
{
	flag: "data",
	data: [{
		_id: "5e0ef6af06016e15ec8eb93d",
		session: "576bed30-2e00-11ea-a16c-b95e027fc497",
		status: "1",
		createdAt: "2020-01-03T08:09:19.034Z",
		updatedAt: "2020-01-03T08:09:19.034Z",
		__v: 0
	}]
}
===============================
to view the messages of the conversation
get the session in conversation
first go to http://localhost:2806/api/conversation/
sample
{
	flag: "data",
	data: [{
		_id: "5e0ef6af06016e15ec8eb93d",
		session: "576bed30-2e00-11ea-a16c-b95e027fc497", <-- get this id
		status: "1",
		createdAt: "2020-01-03T08:09:19.034Z",
		updatedAt: "2020-01-03T08:09:19.034Z",
		__v: 0
	}]
}
paste it here in url vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
then go to here http://localhost:2806/api/dialogue/conversation/576bed30-2e00-11ea-a16c-b95e027fc497
