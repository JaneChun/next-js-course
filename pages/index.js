import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>React Meetups</title>
				<meta name='description' content='Browse a huge list of highly active React meetups!'></meta>
			</Head>
			<MeetupList meetups={props.meetups} />
		</Fragment>
	);
}

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// }

export async function getStaticProps() {
	const client = await MongoClient.connect('mongodb+srv://janechun22:janechun22@cluster0.jrwnfs4.mongodb.net/?retryWrites=true&w=majority');
	const db = client.db();

	const meetupCollection = db.collection('meetups');

	const meetups = await meetupCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				id: meetup._id.toString(),
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
			})),
		},
	};
}

export default HomePage;
