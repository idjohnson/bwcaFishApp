import { NodeSDK } from '@opentelemetry/sdk-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
 
export function register() {
  const sdk = new NodeSDK({
    traceExporter: new OTLPTraceExporter({
      url: 'https://otlp.nr-data.net',
      headers: {
        'api-key': '31561efb445d6b7e52c4c0ae56da7575FFFFNRAL',
      },
    }),
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: 'bwca-fish-app',
    }),
  });
 
  sdk.start();
}