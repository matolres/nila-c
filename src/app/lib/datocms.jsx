import { GraphQLClient } from 'graphql-request';

const DATOCMS_API_URL = 'https://graphql.datocms.com/';
const DATOCMS_API_TOKEN = process.env.DATOCMS_API_TOKEN;

const client = new GraphQLClient(DATOCMS_API_URL, {
  headers: {
    authorization: `Bearer ${DATOCMS_API_TOKEN}`,
  },
});

export const fetchDatoCMS = async (query, variables) => {
  return client.request(query, variables);
};