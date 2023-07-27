import { makeEnum } from '@transcend-io/type-utils';

/**
 * The database integrations
 */
export const DatabaseIntegration = makeEnum({
  postgresql: 'postgresql',
  redshift: 'amazonredshift',
  snowflake: 'snowflake',
  mysql: 'mysql',
  bigquery: 'bigquery',
  microsoftsql: 'microsoftsql',
  maria: 'maria',
  mongodb: 'mongodb',
  amazondynamodb: 'amazondynamodb',
  amazons3: 'amazons3',
  databrickslakehouse: 'databrickslakehouse',
});

/**
 * The possible drivers for a database integration
 */
export const SQLDriverWithDataMapping = makeEnum({
  [DatabaseIntegration.redshift]: 'Amazon Redshift',
  [DatabaseIntegration.postgresql]: 'PostgreSQL Unicode',
  [DatabaseIntegration.snowflake]: 'SnowflakeDSIIDriver',
  [DatabaseIntegration.mysql]: 'MySQL',
  [DatabaseIntegration.bigquery]: 'Google BigQuery',
  [DatabaseIntegration.microsoftsql]: 'Microsoft SQL',
  [DatabaseIntegration.maria]: 'MariaDB',
});

/** Overrides type */
export type SQLDriverWithDataMapping =
  typeof SQLDriverWithDataMapping[keyof typeof SQLDriverWithDataMapping];

/**
 * All possible drivers for a database integration, regardless
 * or not they support data mapping
 */
export const DatabaseDriver = makeEnum({
  ...SQLDriverWithDataMapping,
  [DatabaseIntegration.mongodb]: 'MongoDB',
  [DatabaseIntegration.amazondynamodb]: 'AmazonDynamoDB',
  [DatabaseIntegration.amazons3]: 'AmazonS3',
  [DatabaseIntegration.databrickslakehouse]: 'Databricks Lakehouse',
});

/** Overrides type */
export type DatabaseDriver = typeof DatabaseDriver[keyof typeof DatabaseDriver];
