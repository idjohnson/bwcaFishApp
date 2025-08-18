const { NodeSDK } = require('@opentelemetry/sdk-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');

const traceUrl = process.env.OTEL_EXPORTER_OTLP_ENDPOINT || 'https://otlp.nr-data.net:4318/v1/traces';
const apiKey = process.env.OTEL_EXPORTER_OTLP_APIKEY || 'xxxxxxxxxxxxxxxxxxxxxxxxxNRAL';
const serviceName = process.env.OTEL_SERVICE_NAME || 'bwca-fish-app';

const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({ 
      url: traceUrl,
      headers: {
        'api-key': apiKey,
      }, 
 }),
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
  }),
  // add instrumentations array here if you install them
});

function handleStartResult(result) {
  if (result && typeof result.then === 'function') {
    result
      .then(() => console.log('[otel-init] OpenTelemetry SDK started, exporter ->', traceUrl))
      .catch((err) => console.error('[otel-init] OpenTelemetry SDK failed to start', err));
  } else {
    // start returned synchronously (undefined) — treat as started
    console.log('[otel-init] OpenTelemetry SDK started (sync), exporter ->', traceUrl);
  }
}

function handleShutdownResult(result) {
  if (result && typeof result.then === 'function') {
    result
      .then(() => console.log('[otel-init] SDK shutdown complete'))
      .catch((e) => console.error('[otel-init] SDK shutdown error', e))
      .finally(() => process.exit(0));
  } else {
    // shutdown was synchronous or returned undefined
    console.log('[otel-init] SDK shutdown complete (sync)');
    process.exit(0);
  }
}

// start the SDK (supports both Promise-returning and void start())
try {
  const startResult = sdk.start && sdk.start();
  handleStartResult(startResult);
} catch (err) {
  console.error('[otel-init] Error starting SDK', err);
}

process.on('SIGTERM', () => {
  try {
    const shutdownResult = sdk.shutdown && sdk.shutdown();
    handleShutdownResult(shutdownResult);
  } catch (e) {
    console.error('[otel-init] SDK shutdown error', e);
    process.exit(1);
  }
});

process.on('SIGINT', () => {
  try {
    const shutdownResult = sdk.shutdown && sdk.shutdown();
    handleShutdownResult(shutdownResult);
  } catch (e) {
    console.error('[otel-init] SDK shutdown error', e);
    process.exit(1);
  }
});