import React from 'react';
import classes from './MeetupDetail.module.css';
// classes는 JavaScript 객체가 되어, CSS 파일에서 정의한 CSS 클래스 모두 이 객체의 프로퍼티로 사용할 수 있다.
function MeetupDetail(props) {
	return (
		<section className={classes.detail}>
			<img src={props.image} alt={props.title} />
			<h1>
				{props.id}. {props.title}
			</h1>
			<address>{props.address}</address>
			<p>{props.description}</p>
		</section>
	);
}

export default MeetupDetail;
