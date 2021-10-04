/// <reference types="node" />
import { EventEmitter } from 'events';
import { Data } from './request';
import { CustomHeaders, CustomHeadersFunction } from './headers';
import { HttpOptions } from './http-options';
export interface MetricsOptions {
    appName: string;
    instanceId: string;
    strategies: string[];
    metricsInterval: number;
    disableMetrics?: boolean;
    bucketInterval?: number;
    url: string;
    headers?: CustomHeaders;
    customHeadersFunction?: CustomHeadersFunction;
    timeout?: number;
    httpOptions?: HttpOptions;
}
export default class Metrics extends EventEmitter {
    private bucket;
    private appName;
    private instanceId;
    private sdkVersion;
    private strategies;
    private metricsInterval;
    private disabled;
    private bucketInterval;
    private url;
    private timer;
    private started;
    private headers?;
    private customHeadersFunction?;
    private timeout?;
    private httpOptions?;
    constructor({ appName, instanceId, strategies, metricsInterval, disableMetrics, url, headers, customHeadersFunction, timeout, httpOptions, }: MetricsOptions);
    private startTimer;
    stop(): void;
    registerInstance(): Promise<boolean>;
    sendMetrics(): Promise<boolean>;
    assertBucket(name: string): boolean;
    count(name: string, enabled: boolean): boolean;
    countVariant(name: string, variantName: string): boolean;
    private bucketIsEmpty;
    private resetBucket;
    private closeBucket;
    private getPayload;
    getClientData(): Data;
    getMetricsData(): Data;
}
//# sourceMappingURL=metrics.d.ts.map