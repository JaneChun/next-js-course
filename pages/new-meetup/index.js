import React, { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import Head from 'next/head';

function NewMeetUpPage() {
	const router = useRouter();

	async function addMeetupHandler(enteredMeetupData) {
		const response = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(enteredMeetupData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();
		console.log(data);

		router.push('/');
		// router.replace() 뒤로가기 가능
	}

	return (
		<Fragment>
			<Head>
				<title>Add a New Meetup</title>
				<meta name='description' content='Add your own meetups!'></meta>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />;
		</Fragment>
	);
}

export default NewMeetUpPage;
