const requestCall = require("./requestCall");
const cacheStore = {};

/**
 * @param {*} key
 * @param {*} allTags
 * @returns an array of posts objects either from cache or from API
 */
module.exports = {
	get(key, allTags) {
		try {
			if (cacheStore[key]) {
				// if the cacheStore has the key, return the cached data
				return cacheStore[key];
			} else {
				return this.store(key, allTags);
			}
		} catch (error) {
			console.log(error);
		}
	},
	store(key, allTags) {
		try {
			// if the cacheStore doesn't have the key, fetch the data from API
			const data = requestCall(allTags);

			// store the data in the cacheStore
			cacheStore[key] = data;

			// return the data
			return data;
		} catch (error) {
			console.log(error);
		}
	},
};
