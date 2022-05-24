module.exports = (req, res, next) => {
	const keys = ["id", "likes", "popularity", "reads"];

	const direction = ["asc", "desc"];

	// check if the query params are valid
	if (!req.query.tags || req.query.tags.length === 0) {
		res.status(400).json({ error: "Tag parameter is required" });
	} else if (
		(req.query.direction && !direction.includes(req.query.direction)) ||
		(req.query.sortBy && !keys.includes(req.query.sortBy))
	) {
		res.status(400).json({
			error: "direction parameter or sortBy parameter is invalid",
		});
	} else {
		next();
	}
};
