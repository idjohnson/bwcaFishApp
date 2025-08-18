import { NodeSDK } from '@opentelemetry/sdk-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

const traceUrl = process.env.OTEL_EXPORTER_OTLP_ENDPOINT || 'https://otlp.nr-data.net:4318/v1/traces';
const apiKey = process.env.OTEL_EXPORTER_OTLP_APIKEY || 'xxxxxxxxxxxxxxxxxxxxxxxxxNRAL';

export function register() {
  const sdk = new NodeSDK({
    traceExporter: new OTLPTraceExporter({
      url: traceUrl,
      headers: {
        'api-key': apiKey,
      },
    }),
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: 'bwca-fish-app',
    }),
  });
 
  sdk.start();
}