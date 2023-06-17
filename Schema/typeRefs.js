import { gql } from "apollo-server";

const typeDefs = gql`
  type Data {
    id: ID!
    Title: String!
    Level: String!
    Pricing: String!
    FromDate: String!
    ToDate: String!
    Mode: String!
    Start: String!
    End: String!
    Description: String!
  }

  type Query {
    data: [Data]
    course(id:ID!):Data
  }

  input courseDataInput {
    Title: String!
    Level: String!
    Pricing: String!
    FromDate: String!
    ToDate: String!
    Mode: String!
    Start: String!
    End: String!
    Description: String!
  }
  input editData {
    Title: String
    Level: String
    Pricing: String
    FromDate: String
    ToDate: String
    Mode: String
    Start: String
    End: String
    Description: String
  }

  type Mutation {
    courseData(input: courseDataInput!): Data!
    editCourseData(id: ID!, input: editData): Data
    deleteData(id: ID!): Data
  }
`;

export default typeDefs;

// Title
// Level
// Pricing
// FromDate
// ToDate
// Mode
// Start
// End
// Description

// Title":"jiii",
//     "Level":"jiii",
//     "Pricing":"jiii",
//     "FromDate":"jiii",
//     "ToDate":"jiii",
//     "Mode":"jiii",
//     "Start":"jiii",
//     "End":"jhfdhdh",
//     "Description":"jiii"
