/**
 *
 * @sortBy {*} data
 * @sortBy {*} sortBy
 * @sortBy {*} direction
 * @returns sorted data of objects by given field and ascending or descending order
 */
module.exports = (data, sortBy, direction) => {
	//check if direction is asc or desc
	if (direction === "asc") {
		// sort the data by the given field in ascending order
		return data.sort((a, b) => {
			return a[sortBy] - b[sortBy];
		});
	} else {
		// sort the data by the given field in descending order
		return data.sort((a, b) => b[sortBy] - a[sortBy]);
	}
};
