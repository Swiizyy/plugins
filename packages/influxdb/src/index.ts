import 'tslib';
import { InfluxClient, type InfluxOptions } from './lib/structures/InfluxClient';

export type * from '@influxdata/influxdb-client';

export * from './lib/structures/InfluxClient';
export * from './lib/structures/AnalyticsListener';
export * from './lib/types/AnalyticsSchema';
export * from './listeners/_load';

declare module 'discord.js' {
	interface ClientOptions {
		analytics?: InfluxOptions;
		loadInfluxDefaultListeners?: boolean;
		automaticallyAnalyticsSync?: boolean;
	}
}

declare module '@sapphire/framework' {
	interface SapphireClient {
		analytics: InfluxClient;
	}
}
