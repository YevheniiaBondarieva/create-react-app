export const pipeDuration = (minutes) => {
	if (Math.floor(minutes / 60) < 10) {
		if (minutes % 60 < 10) {
			return '0' + Math.floor(minutes / 60) + ':0' + (minutes % 60);
		} else {
			return '0' + Math.floor(minutes / 60) + ':' + (minutes % 60);
		}
	} else {
		if (minutes % 60 < 10) {
			return Math.floor(minutes / 60) + ':0' + (minutes % 60);
		} else {
			return Math.floor(minutes / 60) + ':' + (minutes % 60);
		}
	}
};
