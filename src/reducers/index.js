import auth from './auth';
import config from './config';
import editor from './editor';
import integrations, * as fromIntegrations from './integrations';
import entries, * as fromEntries from './entries';
import editorialWorkflow, * as fromEditorialWorkflow from './editorialWorkflow';
import entryDraft from './entryDraft';
import collections from './collections';
import search from './search';
import medias, * as fromMedias from './medias';
import globalUI from './globalUI';

const reducers = {
  auth,
  config,
  collections,
  search,
  integrations,
  editor,
  entries,
  editorialWorkflow,
  entryDraft,
  medias,
  globalUI,
};

export default reducers;

/*
 * Selectors
 */
export const selectEntry = (state, collection, slug) =>
  fromEntries.selectEntry(state.entries, collection, slug);

export const selectEntries = (state, collection) =>
  fromEntries.selectEntries(state.entries, collection);

export const selectSearchedEntries = (state) => {
  const searchItems = state.search.get('entryIds');
  return searchItems && searchItems.map(({ collection, slug }) => fromEntries.selectEntry(state.entries, collection, slug));
};

export const selectUnpublishedEntry = (state, status, slug) =>
  fromEditorialWorkflow.selectUnpublishedEntry(state.editorialWorkflow, status, slug);

export const selectUnpublishedEntries = (state, status) =>
  fromEditorialWorkflow.selectUnpublishedEntries(state.editorialWorkflow, status);

export const selectIntegration = (state, collection, hook) =>
  fromIntegrations.selectIntegration(state.integrations, collection, hook);

export const getMedia = (state, path) =>
  fromMedias.getMedia(state.config.get('public_folder'), state.medias, path);
