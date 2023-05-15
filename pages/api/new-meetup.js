import { MongoClient } from 'mongodb';

// pages/api/new-meetup.js

// 이 API 라우트는 리액트 컴포넌트를 정의하고 렌더링하거나, 리턴하지 않는다.
// 대신에 서버 사이드 코드를 포함하는 함수를 정의한다.
// API 라우트는 서버에서만 돌아간다.

// 이 파일의 URL : /api/new-meetup
// 이 URL에 요청이 보내지면 함수가 트리거된다.

async function handler(req, res) {
	if (req.method === 'POST') {
		const data = req.body;

		// const { title, image, address, description } = data;

		// 데이터베이스에 저장
		const client = await MongoClient.connect('mongodb+srv://janechun22:janechun22@cluster0.jrwnfs4.mongodb.net/?retryWrites=true&w=majority');
		const db = client.db();

		const meetupCollection = db.collection('meetups');

		const result = await meetupCollection.insertOne(data);

		console.log(result);

		client.close();

		res.status(201).json({ message: 'Meetup inserted!' });
	}
}

export default handler;
