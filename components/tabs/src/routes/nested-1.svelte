<script lang="ts">
	import './nested-1.css';
	import { Tabs, TabPanel, TabList, Tab } from '../lib';

	let tabs: Tabs;
	let activeTabIndex: typeof tabs.selectedIndex;
	$: if (tabs) {
		// tabs.selectTab(1);
		activeTabIndex = tabs.selectedIndex;
	}
</script>

<Tabs bind:this={tabs} class="is-first" mode="hide">
	<TabList>
		<Tab>First-A</Tab>
		<Tab>First-B</Tab>
		<Tab disabled>First-C</Tab>
		<Tab>First-D</Tab>
		<Tab>First-E</Tab>
	</TabList>

	<TabPanel let:index>
		<div>First level. Tab: A, index {index}</div>
		<Tabs>
			<TabList>
				<Tab>Second-A</Tab>
				<Tab>Second-B</Tab>
				<Tab>Second-C</Tab>
			</TabList>
			<TabPanel let:index>
				<div>Second of First-A. Tab: A, index {index}</div>
				<Tabs>
					<TabList>
						<Tab>Fourth-A</Tab>
						<Tab>Fourth-B</Tab>
					</TabList>
					<TabPanel let:index>Fourth of Second-B. Tab: A, index {index}</TabPanel>
					<TabPanel let:index>Fourth of Second-B. Tab: B, index {index}</TabPanel>
				</Tabs>
			</TabPanel>
			<TabPanel let:index>Second of First-A. Tab: B, index {index}</TabPanel>
			<TabPanel let:index>Second of First-A. Tab: C, index {index}</TabPanel>
		</Tabs>
	</TabPanel>
	<TabPanel let:index>
		<div>First level. Tab: B, index {index}</div>
		<Tabs>
			<TabList>
				<Tab>Third-A</Tab>
				<Tab>Third-B</Tab>
			</TabList>
			<TabPanel let:index>Third of First-B. Tab: A, index {index}</TabPanel>
			<TabPanel let:index>Third of First-B. Tab: B, index {index}</TabPanel>
		</Tabs>
	</TabPanel>
	<TabPanel let:index>First level. Tab: C, index {index}</TabPanel>
	<TabPanel let:index>First level. Tab: D, index {index}</TabPanel>
	<TabPanel let:index>First level. Tab: E, index {index}</TabPanel>
</Tabs>

{#if tabs != null}
	<div>activateTab: {$activeTabIndex}</div>
{/if}
