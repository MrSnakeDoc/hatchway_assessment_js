const sorting = require("../services/sorting");
const cache = require("../services/cache");

module.exports = {
	/**
	 *
	 * @param {*} _
	 * @param {*} res
	 * @returns object { success: true }
	 */
	ping(_, res) {
		try {
			res.status(200).json({
				success: true,
			});
		} catch (err) {
			console.log(err);
		}
	},

	/**
	 *
	 * @param {*} req
	 * @param {*} res
	 * @returns Sorted array of posts objects by given field and ascending or descending order
	 */
	async posts(req, res) {
		try {
			// extract the query params
			const { tags, sortBy = "id", direction = "asc" } = req.query;

			// split the tags into an array
			const allTags = tags.split(",");

			// get the data from cache or API
			const data = await cache.get(tags, allTags);

			// sort the data by the given field and direction
			sorting(data, sortBy, direction);

			// return the sorted data
			res.status(200).json({ posts: data });
		} catch (error) {
			console.log(error);
		}
	},
};
