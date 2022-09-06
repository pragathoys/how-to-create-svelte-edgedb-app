import { error } from '@sveltejs/kit';

import * as edgedb from "edgedb";

 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

	const client = edgedb.createClient();

	const todos = await client.query(`select Todo{title};`);

	return { todos: todos };
 
  throw error(404, 'Not found');
}