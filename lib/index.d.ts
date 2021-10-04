import { Unleash, UnleashConfig } from './unleash';
import { Variant } from './variant';
import { Context } from './context';
import { TagFilter } from './tags';
export { Strategy } from './strategy/index';
export { Context, Variant, Unleash, TagFilter };
export declare function initialize(options: UnleashConfig): Unleash;
export declare function startUnleash(options: UnleashConfig): Promise<Unleash>;
export declare function isEnabled(name: string, context?: Context, fallbackValue?: boolean): boolean;
export declare function destroy(): void | undefined;
export declare function getFeatureToggleDefinition(toggleName: string): import("./feature").FeatureInterface | undefined;
export declare function getFeatureToggleDefinitions(): import("./feature").FeatureInterface[] | undefined;
export declare function getVariant(name: string, context?: Context, fallbackVariant?: Variant): Variant;
export declare function count(toggleName: string, enabled: boolean): void | undefined;
export declare function countVariant(toggleName: string, variantName: string): void | undefined;
//# sourceMappingURL=index.d.ts.map