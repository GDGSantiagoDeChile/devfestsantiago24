import { useEffect, useState } from 'react';
import styles from '@/styles/components/timer.module.scss';

export default function Timer() {
	const [ days, setDays ] = useState(0);
	const [ hours, setHours ] = useState(0);
	const [ minutes, setMinutes ] = useState(0);
	const [ seconds, setSeconds ] = useState(0);

	const deadline = 'February, 25, 2023';

	const getTime = () => {
		const time = Date.parse(deadline) - Date.now();

		setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
		setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
		setMinutes(Math.floor((time / 1000 / 60) % 60));
		setSeconds(Math.floor((time / 1000) % 60));
	};

	useEffect(() => {
		const interval = setInterval(() => getTime(), 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<p id='day'>{days < 10 ? '0' + days : days}</p>
				<span className={styles.text}>días</span>
			</div>
			<div className={styles.box}>
				<p id='hour'>{hours < 10 ? '0' + hours : hours}</p>
				<span className={styles.text}>horas</span>
			</div>
			<div className={styles.box}>
				<p id='minute'>{minutes < 10 ? '0' + minutes : minutes}</p>
				<span className={styles.text}>minutos</span>
			</div>
			<div className={styles.box}>
				<p id='second'>{seconds < 10 ? '0' + seconds : seconds}</p>
				<span className={styles.text}>segundos</span>
			</div>
		</div>
	);
}
