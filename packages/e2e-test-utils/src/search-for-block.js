/**
 * Internal dependencies
 */
import { openGlobalInserter } from './open-global-inserter';

/**
 * Search for block in the global inserter
 *
 * @param {string} searchTerm The text to search the inserter for.
 */
export async function searchForBlock( searchTerm ) {
	await openGlobalInserter();
	await page.keyboard.type( searchTerm );
}
