<div class="component__source">Source <code>Tabs.svelte</code></div>
<h1 class="component__name">Tabs</h1>
<div class="component__comment"><p>This is the root component. It&#39;s a container of the <code>Tab</code> and <code>Panel</code> components. The basic structure of components is:</p>
<pre><code class="language-tsx">&lt;Tabs&gt;
  &lt;div&gt; &lt;!‐‐ optional wrapper ‐‐&gt;
    &lt;Tab&gt;A&lt;/Tab&gt;
    &lt;Tab&gt;B&lt;/Tab&gt;
  &lt;/div&gt;
  &lt;div&gt; &lt;!‐‐ optional wrapper ‐‐&gt;
    &lt;TabPanel&gt;A&lt;/TabPanel&gt;
    &lt;TabPanel&gt;B&lt;/TabPanel&gt;
  &lt;/div&gt;
&lt;/Tabs&gt;
</code></pre>
<p>But what you really need to do is fill the slots with useful items such as these:</p>
<pre><code class="language-tsx">&lt;Tabs&gt;
  &lt;Tab let:active let:activate&gt;&lt;button class:active on:click={activate}&gt;A&lt;/button&gt;&lt;/Tab&gt;
  &lt;Tab let:active let:activate&gt;&lt;button class:active on:click={activate}&gt;B&lt;/button&gt;&lt;/Tab&gt;
  &lt;TabPanel let:active&gt;
    &lt;div style:display={active ? &#39;block&#39; : &#39;none&#39;}&gt;Content of A&lt;/div&gt;
  &lt;/TabPanel&gt;
  &lt;TabPanel let:active&gt;
    &lt;div style:display={active ? &#39;block&#39; : &#39;none&#39;}&gt;Content of B&lt;/div&gt;
  &lt;/TabPanel&gt;
&lt;/Tabs&gt;
</code></pre>
<p><strong>Important!</strong></p>
<p>The <code>Tab</code> and <code>Panel</code> components are added to the end of the list during rendering. To keep the correct component order, reassign the entire tab list or use the <a href="https://svelte.dev/docs#template-syntax-key"><code>{#keys}</code></a> or <a href="https://svelte.dev/docs#template-syntax-each"><code>{#each key}</code></a>.</p>
<p>Under the hood, the component uses a <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/tabs/tabs-context.js">TabContext</a> of this type:</p>
<pre><code class="language-js">class TabsContext {
  readonly active: Readable&lt;ContextActive&gt;;
  readonly length: Readable&lt;number&gt;;
  static readonly contextName: symbol;
  push(entity: &#39;tab&#39; | &#39;panel&#39;): symbol;
  pop(entity: { tab: symbol; } | { panel: symbol; }): boolean;
  select(entity: number | { tab: symbol; } | { panel: symbol; }): boolean;
}
</code></pre>
<p>You can access the context with the code <code>getContext(TabsContext.contextName)</code>. You can also extend the class if there is a lack of functionality.</p>
</div>
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop name</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">selected</td>
<td class="prop__type"><code>number</code></td>
<td class="prop__value"></td>
<td class="prop__description"><p><strong>Reactive, read/write</strong>. The current index of the <code>Tab</code>/<code>Panel</code> pair members.
The index will not go beyond the range of the tabs, so you can safely assign a new value.</p>
</td></tr>
<tr><td class="prop__name">length</td>
<td class="prop__type"><code>number</code></td>
<td class="prop__value"><code>0</code></td>
<td class="prop__description"><p><strong>Reactive, read</strong>. The current number of <code>Tab</code>/<code>Panel</code> pair members</p>
</td></tr></table>
<h2 class="component-tbl-header">Slots</h2><table><tr><th>Slot name</th><th>Default</th><th>Props</th></tr><tr><td class="slot__name">__default__</td>
<td class="slot__default"><code>true</code></td>
<td class="slot__props"><code>{}</code></td></tr></table>
<hr>
<div class="component__source">Source <code>Tab.svelte</code></div>
<h1 class="component__name">Tab</h1>
<div class="component__comment"><p>The component sends <code>active</code> and <code>activate</code> props to the slot.</p>
<ul>
<li><code>active: boolean</code> — whether the current tab is active</li>
<li><code>activate: () =&gt; void</code> — call this function to make the current tab active</li>
</ul>
</div>
<h2 class="component-tbl-header">Slots</h2><table><tr><th>Slot name</th><th>Default</th><th>Props</th></tr><tr><td class="slot__name">__default__</td>
<td class="slot__default"><code>true</code></td>
<td class="slot__props"><code>{ active: {$active.tab === id}, activate: any }</code></td></tr><tr><th colspan="3">Fallback</th></tr>
<tr><td class="slot__fallback" colspan="3"><pre><code>Tab slot is empty
</code></pre>
</td></tr></table>
<hr>
<div class="component__source">Source <code>Panel.svelte</code></div>
<h1 class="component__name">Panel</h1>
<div class="component__comment"><p>The component sends <code>active</code> and <code>activate</code> props to the slot.</p>
<ul>
<li><code>active: boolean</code> — whether the current panel is active</li>
<li><code>activate: () =&gt; void</code> — call this function to make the current panel active</li>
</ul>
</div>
<h2 class="component-tbl-header">Slots</h2><table><tr><th>Slot name</th><th>Default</th><th>Props</th></tr><tr><td class="slot__name">__default__</td>
<td class="slot__default"><code>true</code></td>
<td class="slot__props"><code>{ active: {$active.panel === id}, activate: any }</code></td></tr><tr><th colspan="3">Fallback</th></tr>
<tr><td class="slot__fallback" colspan="3"><pre><code>Panel slot is empty
</code></pre>
</td></tr></table>
