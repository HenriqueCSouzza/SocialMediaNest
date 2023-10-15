const prismaClientErrorMessages = {
  P2000: {
    message:
      "The provided value for the column is too long for the column's type. Column: {column_name}",
    regex: new RegExp('{column_name}', 'g'),
  },
  P2001: {
    message:
      'The record searched for in the where condition ({model_name}.{argument_name} = {argument_value}) does not exist',
    regex: new RegExp('{model_name}|{argument_name}|{argument_value}', 'g'),
  },
  P2002: {
    message: 'Unique constraint failed on the {constraint}',
    regex: new RegExp('{constraint}', 'g'),
  },
  P2003: {
    message: 'Foreign key constraint failed on the field: {field_name}',
    regex: new RegExp('{field_name}', 'g'),
  },
  P2004: {
    message: 'A constraint failed on the database: {database_error}',
    regex: new RegExp('{database_error}', 'g'),
  },
  P2005: {
    message:
      "The value {field_value} stored in the database for the field {field_name} is invalid for the field's type",
    regex: new RegExp('{field_value}|{field_name}', 'g'),
  },
  P2006: {
    message:
      'The provided value {field_value} for {model_name} field {field_name} is not valid',
    regex: new RegExp('{field_value}|{model_name}|{field_name}', 'g'),
  },
  P2007: {
    message: 'Data validation error {database_error}',
    regex: new RegExp('{database_error}', 'g'),
  },
  P2008: {
    message:
      'Failed to parse the query {query_parsing_error} at {query_position}',
    regex: new RegExp('{query_parsing_error}|{query_position}', 'g'),
  },
  P2009: {
    message:
      'Failed to validate the query: {query_validation_error} at {query_position}',
    regex: new RegExp('{query_validation_error}|{query_position}', 'g'),
  },
  P2010: {
    message: 'Raw query failed. Code: {code}. Message: {message}',
    regex: new RegExp('{code}|{message}', 'g'),
  },
  P2011: {
    message: 'Null constraint violation on the {constraint}',
    regex: new RegExp('{constraint}', 'g'),
  },
  P2012: {
    message: 'Missing a required value at {path}',
    regex: new RegExp('{path}', 'g'),
  },
  P2013: {
    message:
      'Missing the required argument {argument_name} for field {field_name} on {object_name}.',
    regex: new RegExp('{argument_name}|{field_name}|{object_name}', 'g'),
  },
  P2014: {
    message:
      "The change you are trying to make would violate the required relation '{relation_name}' between the {model_a_name} and {model_b_name} models.",
    regex: new RegExp('{relation_name}|{model_a_name}|{model_b_name}', 'g'),
  },
  P2015: {
    message: 'A related record could not be found. {details}',
    regex: new RegExp('{details}', 'g'),
  },
  P2016: {
    message: 'Query interpretation error. {details}',
    regex: new RegExp('{details}', 'g'),
  },
  P2017: {
    message:
      'The records for relation {relation_name} between the {parent_name} and {child_name} models are not connected.',
    regex: new RegExp('{relation_name}|{parent_name}|{child_name}', 'g'),
  },
  P2018: {
    message: 'The required connected records were not found. {details}',
    regex: new RegExp('{details}', 'g'),
  },
  P2019: {
    message: 'Input error. {details}',
    regex: new RegExp('{details}', 'g'),
  },
  P2020: {
    message: 'Value out of range for the type. {details}',
    regex: new RegExp('{details}', 'g'),
  },
  P2021: {
    message: 'The table {table} does not exist in the current database.',
    regex: new RegExp('{table}', 'g'),
  },
  P2022: {
    message: 'The column {column} does not exist in the current database.',
    regex: new RegExp('{column}', 'g'),
  },
  P2023: {
    message: 'Inconsistent column data: {message}',
    regex: new RegExp('{message}', 'g'),
  },
  P2024: {
    message:
      'Timed out fetching a new connection from the connection pool. (More info: http://pris.ly/d/connection-pool (Current connection pool timeout: {timeout}, connection limit: {connection_limit})',
    regex: new RegExp('{timeout}|{connection_limit}', 'g'),
  },
  P2025: {
    message:
      'An operation failed because it depends on one or more records that were required but not found. {cause}',
    regex: new RegExp('{cause}', 'g'),
  },
  P2026: {
    message:
      "The current database provider doesn't support a feature that the query used: {feature}",
    regex: new RegExp('{feature}', 'g'),
  },
  P2027: {
    message:
      'Multiple errors occurred on the database during query execution: {errors}',
    regex: new RegExp('{errors}', 'g'),
  },
  P2028: {
    message: 'Transaction API error: {error}',
    regex: new RegExp('{error}', 'g'),
  },
  P2030: {
    message:
      'Cannot find a fulltext index to use for the search, try adding a @@fulltext([Fields...]) to your schema',
    regex: new RegExp('{Fields...}', 'g'),
  },
  P2031: {
    message:
      'Prisma needs to perform transactions, which requires your MongoDB server to be run as a replica set. See details: https://pris.ly/d/mongodb-replica-set',
    regex: new RegExp('https://pris.ly/d/mongodb-replica-set', 'g'),
  },
  P2033: {
    message:
      "A number used in the query does not fit into a 64 bit signed integer. Consider using BigInt as field type if you're trying to store large integers",
    regex: new RegExp('BigInt', 'g'),
  },
  P2034: {
    message:
      'Transaction failed due to a write conflict or a deadlock. Please retry your transaction',
    regex: new RegExp('retry', 'g'),
  },
};

export default prismaClientErrorMessages;
