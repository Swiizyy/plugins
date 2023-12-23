/**
 * ================================================
 * | THIS IS FOR TYPEDOC. DO NOT REMOVE THIS FILE |
 * ================================================
 */

import type { WritePrecisionType } from "@influxdata/influxdb-client";
import type { InfluxClient, InfluxOptions } from "../structures/index";


declare module 'discord.js' {
	export interface Client {
		analytics: InfluxClient;
	}

	export interface ClientOptions {
		analytics?: InfluxOptions;
	}
}


declare global {
	namespace NodeJS {
		interface ProcessEnv {
				// Influx Options
				INFLUX_OPTIONS_STRING?: string;
				INFLUX_URL?: string;
				INFLUX_HEADERS?: string;
				INFLUX_PROXY_URL?: string;
				INFLUX_TIMEOUT?: `${number}`;
				INFLUX_TOKEN?: string;
				// API
				INFLUX_ORG?: string;
				INFLUX_WRITE_BUCKET?: string;
				INFLUX_WRITE_PRECISION?: WritePrecisionType;
		}
	}
}