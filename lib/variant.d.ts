import { Context } from './context';
import { FeatureInterface } from './feature';
declare enum PayloadType {
    STRING = "string"
}
interface Override {
    contextName: string;
    values: String[];
}
export interface Payload {
    type: PayloadType;
    value: string;
}
export interface VariantDefinition {
    name: string;
    weight: number;
    stickiness?: string;
    payload: Payload;
    overrides: Override[];
}
export interface Variant {
    name: string;
    enabled: boolean;
    payload?: Payload;
}
export declare function getDefaultVariant(): Variant;
export declare function selectVariant(feature: FeatureInterface, context: Context): VariantDefinition | null;
export {};
//# sourceMappingURL=variant.d.ts.map