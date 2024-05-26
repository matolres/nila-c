import { GraphQLClient } from 'graphql-request';

const DATOCMS_API_URL = 'https://graphql.datocms.com/';
const NEXT_PUBLIC_DATOCMS_API_TOKEN = process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN;

const client = new GraphQLClient(DATOCMS_API_URL, {
  headers: {
    authorization: `Bearer ${NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
  },
});

export const fetchDatoCMS = async (query, variables) => {
  return client.request(query, variables);
};