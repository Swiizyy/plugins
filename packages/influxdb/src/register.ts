import './index';

import { container, Plugin, postInitialization, postLogin, preGenericsInitialization, SapphireClient } from '@sapphire/framework';
import { InfluxClient, loadListeners } from './index';
import { AnalyticsSync } from './lib/types/index';

/**
 * Plugin that allows to manage nodejs application environment variables.
 * @since 1.0.0
 */
export class EnvPlugin extends Plugin {
	public static [preGenericsInitialization](this: SapphireClient): void {
		this.analytics = new InfluxClient(this.options.analytics);
	}

	public static [postInitialization](this: SapphireClient): void {
		if (!(this.options.loadInfluxDefaultListeners ?? true)) {
			return;
		}
		loadListeners();
	}

	public static [postLogin](this: SapphireClient): void {
		if (!(this.options.loadInfluxDefaultListeners ?? true)) {
			return;
		}
		if (!(this.options.loadInfluxDefaultListeners ?? true)) return;

		container.logger.info('[InfluxDB-Plugin]: Enabled. Synchronizing stats with InfluxDB');
		container.logger.info('[InfluxDB-Plugin]: Auto-posting of statistics has been enabled');

		const rawGuilds = container.client.guilds.cache.size;
		const rawUsers = container.client.guilds.cache.reduce((acc, val) => acc + (val.memberCount ?? 0), 0);
		setInterval(() => {
			container.client.emit(AnalyticsSync, rawGuilds, rawUsers);
		}, 60_000);
	}
}

SapphireClient.plugins.registerPreGenericsInitializationHook(EnvPlugin[preGenericsInitialization], 'InfluxDB-PreGenericsInitialization');
SapphireClient.plugins.registerPostInitializationHook(EnvPlugin[postInitialization], 'InfluxDB-postInitialization');
SapphireClient.plugins.registerPostLoginHook(EnvPlugin[postLogin], 'InfluxDB-postLogin');
