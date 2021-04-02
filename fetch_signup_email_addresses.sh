#!/usr/bin/env bash

bq load --skip_leading_rows=1 sneezles_log_analysis.usage 'gs://sneezles-logging/UsageLogs_usage*' ~/Downloads/cloud_storage_usage_schema_v0.json
bq query "select cs_object as email_address from sneezles_log_analysis.usage where cs_uri contains 'signup' group by email_address"
