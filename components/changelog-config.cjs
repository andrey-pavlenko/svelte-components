const commit = `### {{#if committerDate}}{{~committerDate~}}
{{~/if~}} {{#if scope}} **{{scope}}:**
{{~/if}} {{#if subject}}
  {{~subject}}
{{~else}}
  {{~header}}
{{~/if}}

{{~!-- commit link --}}{{~#if hash}} {{#if @root.linkReferences~}}
  [{{shortHash}}]({{commitUrlFormat}})
{{~else}}
  {{~shortHash}}
{{~/if}}{{~/if}}

{{~!-- commit references --}}
{{~#if references~}}
  , closes
  {{~#each references}} {{#if @root.linkReferences~}}
    [
    {{~#if this.owner}}
      {{~this.owner}}/
    {{~/if}}
    {{~this.repository}}{{this.prefix}}{{this.issue}}]({{issueUrlFormat}})
  {{~else}}
    {{~#if this.owner}}
      {{~this.owner}}/
    {{~/if}}
    {{~this.repository}}{{this.prefix}}{{this.issue}}
  {{~/if}}{{/each}}
{{~/if}}


{{#if body}}
{{body}}

{{/if~}}


{{#if footer}}
{{footer}}

{{/if~}}
`;

module.exports = {
  parserOpts: {
    headerPattern: /^(\w*):\s*(.*)$/,
    headerCorrespondence: ['tag', 'message', 'body']
  },
  writerOpts: {
    headerPartial: '',
    commitPartial: commit,
    footerPartial: '',
    transform: (commit) => {
      if (!commit.tag || typeof commit.tag !== 'string') {
        return;
      }
      commit.shortHash = commit.hash.substring(0, 7);
      // console.info(commit);
      return commit;
    },
    groupBy: false,
    commitsSort: (a, b) => {
      return b.committerDate.localeCompare(a.committerDate);
    }
  }
};
