const { default: axios } = require("axios");

module.exports = async (allTags) => {
	try {
		// if the cacheStore doesn't have the key, fetch the data from API
		const data = await Promise.all(
			allTags.map(async (tag) => {
				const { data } = await axios.get(
					`https://api.hatchways.io/assessment/blog/posts?tag=${tag}`
				);
				return data;
			})
		);

		// extract the data from the array
		const relevantData = data[0].posts;

		// return the data
		return relevantData;
	} catch (err) {
		console.log(err);
	}
};
