export const pipeDuration = (minutes) => {
	const hours = Math.floor(minutes / 60);
	const mins = minutes % 60;
	const minsPrefix = mins < 10 ? '0' : '';
	const timeStr = `${hours}:${minsPrefix}${mins}`;
	return hours < 10 ? `0${timeStr}` : timeStr;
};
