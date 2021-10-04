/// <reference types="node" />
import * as http from 'http';
import { URL } from 'url';
import { CustomHeaders } from './headers';
import { HttpOptions } from './http-options';
export interface RequestOptions {
    url: string;
    timeout?: number;
    headers?: CustomHeaders;
}
export interface GetRequestOptions extends RequestOptions {
    etag?: string;
    appName?: string;
    instanceId?: string;
    httpOptions?: HttpOptions;
}
export interface Data {
    [key: string]: any;
}
export interface PostRequestOptions extends RequestOptions {
    json: Data;
    appName?: string;
    instanceId?: string;
    httpOptions?: HttpOptions;
}
export declare const getAgent: (url: URL) => http.Agent;
export declare const buildHeaders: (appName: string | undefined, instanceId: string | undefined, etag: string | undefined, contentType: string | undefined, custom: CustomHeaders | undefined) => Record<string, string>;
export declare const post: ({ url, appName, timeout, instanceId, headers, json, httpOptions, }: PostRequestOptions) => Promise<import("node-fetch").Response>;
export declare const get: ({ url, etag, appName, timeout, instanceId, headers, httpOptions, }: GetRequestOptions) => Promise<import("node-fetch").Response>;
//# sourceMappingURL=request.d.ts.map