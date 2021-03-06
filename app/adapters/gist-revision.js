import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForQuery(query) {
    const host = this.host || "";
    return `${host}/gists/${query.gistId}/${query.revId}`;
  }
});
