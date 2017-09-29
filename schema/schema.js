const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql;

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: {
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    image: {type: GraphQLString},
    price: {type: GraphQLInt}
  }
});
