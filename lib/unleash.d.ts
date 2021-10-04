/// <reference types="node" />
import { EventEmitter } from 'events';
import { RepositoryInterface } from './repository';
import { CustomHeaders, CustomHeadersFunction } from './headers';
import { Context } from './context';
import { Strategy } from './strategy';
import { FeatureInterface } from './feature';
import { Variant } from './variant';
import { FallbackFunction } from './helpers';
import { HttpOptions } from './http-options';
import { TagFilter } from './tags';
export { Strategy };
export interface UnleashConfig {
    appName: string;
    environment?: string;
    instanceId?: string;
    url: string;
    refreshInterval?: number;
    projectName?: string;
    metricsInterval?: number;
    namePrefix?: string;
    disableMetrics?: boolean;
    backupPath?: string;
    strategies?: Strategy[];
    customHeaders?: CustomHeaders;
    customHeadersFunction?: CustomHeadersFunction;
    timeout?: number;
    repository?: RepositoryInterface;
    httpOptions?: HttpOptions;
    tags?: Array<TagFilter>;
}
export interface StaticContext {
    appName: string;
    environment: string;
}
export declare class Unleash extends EventEmitter {
    private repository;
    private client;
    private metrics;
    private staticContext;
    private synchronized;
    constructor({ appName, environment, projectName, instanceId, url, refreshInterval, metricsInterval, disableMetrics, backupPath, strategies, repository, namePrefix, customHeaders, customHeadersFunction, timeout, httpOptions, tags, }: UnleashConfig);
    destroy(): void;
    isEnabled(name: string, context?: Context, fallbackFunction?: FallbackFunction): boolean;
    isEnabled(name: string, context?: Context, fallbackValue?: boolean): boolean;
    getVariant(name: string, context?: Context, fallbackVariant?: Variant): Variant;
    getFeatureToggleDefinition(toggleName: string): FeatureInterface;
    getFeatureToggleDefinitions(): FeatureInterface[];
    count(toggleName: string, enabled: boolean): void;
    countVariant(toggleName: string, variantName: string): void;
}
//# sourceMappingURL=unleash.d.ts.map