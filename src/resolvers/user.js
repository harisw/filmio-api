module.exports = {
    // Resolve the list of movies for a user when requested
    // movies: async (user, args, { models }) => {
    //     return await models.Movie.find({ author: user._id }).sort({ _id: -1 });
    // },
    // Resolve the list of favorites for a user when requested
    favorites: async (user, args, { models }) => {
        return await models.Movie.find({ favoritedBy: user._id }).sort({ _id: -1 });
    }
};