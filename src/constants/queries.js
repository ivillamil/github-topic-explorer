export const TOPICS_QUERY = gql`
  query($topic: String!, $limit: Int!) {
    topic(name: $topic) {
      id,
      name,
      stargazerCount,
      relatedTopics(first: $limit) {
        id,
        name,
        stargazerCount
      }
    }
  }
`