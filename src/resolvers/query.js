module.exports = {
    movies: async (parent, args, { models }) => {
        return await models.Movie.find().limit(100);
    },
    movie: async (parent, args, {models}) => {
        return await models.Movie.findById(args.id);
    },
    user: async (parent, { username }, { models}) => {
        return await models.User.findOne({ username});
    },
    users: async (parent, args, { models}) => {
        return await models.User.find({});
    },
    me: async (parent, args, { models, user}) => {
        return await models.User.findById(user.id);
    },
    movieFeed: async (parent, { cursor }, { models}) => {
        const limit = 10;
        let hasNextPage = false;

        let cursorQuery = {};

        if(cursor) {
            cursorQuery = { _id: {$lt: cursor} };
        }

        let movies = await models.Movie.find(cursorQuery)
        .sort({_id: -1})
        .limit(limit +1);

        if(movies.length > 1){
            hasNextPage = true;
            movies = movies.slice(0, -1);
        }

        const newCursor = movies[movies.length - 1]._id;
        return {
            movies,
            cursor: newCursor,
            hasNextPage
        };
    },
    moviesByCountry: async (parent, { country, cursor }, { models}) => {
        const limit = 10;
        let hasNextPage = false;
        
        let cursorQuery = {};
        if(cursor) {
            cursorQuery = { _id: {$lt: cursor},  country: country};
        }

        let movies = await models.Movie.find(cursorQuery)
        .sort({_id: -1})
        .limit(limit +1);

        if(movies.length > 1){
            hasNextPage = true;
            movies = movies.slice(0, -1);
        }

        const newCursor = movies[movies.length - 1]._id;
        return {
            movies,
            cursor: newCursor,
            hasNextPage
        };
    }
};