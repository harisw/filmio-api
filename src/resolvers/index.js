const Query = require('./query');
const Mutation = require('./mutation');
const Movie = require('./movie');
const User = require('./user');
const { GraphQLDateTime } = require('graphql-iso-date');
module.exports = {
    Query,
    Movie,
    User,
    DateTime: GraphQLDateTime
};