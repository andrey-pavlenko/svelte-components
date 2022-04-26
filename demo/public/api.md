<div class="component__source">Source ../../packages/tabs/Tabs.svelte</div>
<h1 class="component__name">Tabs</h1>
<div class="component__comment"><p>Корневой компонент. Контейнер для одного компонента <code>TabList</code> и множества <code>TabPanel</code></p>
<pre><code class="language-tsx">&lt;Tabs&gt;
  &lt;TabList&gt;
    &lt;Tab&gt;A&lt;/Tab&gt;
    &lt;Tab&gt;B&lt;/Tab&gt;
  &lt;/TabList&gt;

&lt;TabPanel&gt;A&lt;/TabPanel&gt;
&lt;TabPanel&gt;B&lt;/TabPanel&gt;
&lt;/Tabs&gt;
</code></pre>

</div>
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop nane</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td><td class="prop__type"><code>string</code></td><td class="prop__value"><code>''</code></td><td class="prop__description"><p>Произвольный класс, будет добавлен с базавому классу <code>c-tabs</code></p>
</td></tr><tr><td class="prop__name">selectedTabClass</td><td class="prop__type"><code>string</code></td><td class="prop__value"><code>'active'</code></td><td class="prop__description"><p>Класс для дочернего выбранного компонента <code>Tab</code></p>
</td></tr><tr><td class="prop__name">hiddenPanelClass</td><td class="prop__type"><code>string</code></td><td class="prop__value"><code>''</code></td><td class="prop__description"><p>Класс для скрытых, не выбранных, <code>TabPanel</code>.
Используется когда <code>mode = hide</code></p>
</td></tr><tr><td class="prop__name">mode</td><td class="prop__type"><code>"remove" | "hide"</code></td><td class="prop__value"><code>'hide'</code></td><td class="prop__description"></td></tr><tr><td class="prop__name">selectedIndex</td><td class="prop__type"><code>Readable&lt;number&gt;</code></td><td class="prop__value"></td><td class="prop__description"><p>Индекс выбранного компонента <code>Tab</code></p>
<pre><code class="language-js">let selectedIndex;
tabsRef.selectedIndex.subscrive((index) =&gt; selectedIndex = index);
</code></pre>
</td></tr><tr><td class="prop__name">selectTab</td><td class="prop__type"><code>(number) =&gt; void</code></td><td class="prop__value"></td><td class="prop__description"><p>Выбор компонетна <code>Tab</code>. Поддерживаются аргументы для <code>Array.prototype.at(number)</code></p>
<pre><code class="language-js">// Select first Tab
tabsRef.selectTab(0);
// Select last Tab
tabsRef.selectTab(-1);
</code></pre>
</td></tr></table><hr><div class="component__source">Source ../../packages/tabs/List.svelte</div>
<h1 class="component__name">TabList</h1>
<div class="component__comment"><p>Контейнер для компонентов <code>Tab</code></p>
<pre><code class="language-tsx">&lt;TabList&gt;
  &lt;Tab&gt;A&lt;/Tab&gt;
  &lt;Tab&gt;B&lt;/Tab&gt;
&lt;/TabList&gt;
</code></pre>
</div>
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop nane</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td><td class="prop__type"><code>string</code></td><td class="prop__value"><code>''</code></td><td class="prop__description"></td></tr></table><hr><div class="component__source">Source ../../packages/tabs/Tab.svelte</div>
<h1 class="component__name">Tab</h1>
<div class="component__comment"><p>Дочерний компонент для <code>TabList</code></p>
<pre><code class="language-tsx">&lt;Tab&gt;A&lt;/Tab&gt;
</code></pre>
</div>
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop nane</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td><td class="prop__type"><code>string</code></td><td class="prop__value"><code>''</code></td><td class="prop__description"><p>Adds custom class for default <code>c-tabs__tab</code> on root tag</p>
</td></tr><tr><td class="prop__name">selectedClass</td><td class="prop__type"></td><td class="prop__value"></td><td class="prop__description"><p>Custom class if tab is selected.</p>
</td></tr><tr><td class="prop__name">disabled</td><td class="prop__type"></td><td class="prop__value"></td><td class="prop__description"></td></tr></table><hr><div class="component__source">Source ../../packages/tabs/Panel.svelte</div>
<h1 class="component__name">TabPanel</h1>
<div class="component__comment"><p>Переключаемый компнент. Дочерний для <code>Tabs</code></p>
<pre><code class="language-tsx">&lt;TabList&gt;
  &lt;Tab&gt;A&lt;/Tab&gt;
  &lt;Tab&gt;B&lt;/Tab&gt;
&lt;/TabList&gt;
</code></pre>
</div>
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop nane</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td><td class="prop__type"><code>string</code></td><td class="prop__value"><code>''</code></td><td class="prop__description"></td></tr><tr><td class="prop__name">hiddenClass</td><td class="prop__type"></td><td class="prop__value"></td><td class="prop__description"></td></tr></table>
