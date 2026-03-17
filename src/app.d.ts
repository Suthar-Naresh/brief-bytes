import PocketBase from 'pocketbase';
import type { RecordModel } from "pocketbase";

declare global {
	namespace App {
		interface Locals {
			user: RecordModel | null,
			pb: PocketBase
		}
	}
}

export {};
