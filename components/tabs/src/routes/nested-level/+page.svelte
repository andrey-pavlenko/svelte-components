<script lang="ts">
  import { Tabs, Tab, Panel } from '$lib';

  const tabs = [...Array(5).keys()];
</script>

<div>
  <Tabs>
    {#each tabs as tab}
      <Tab let:active let:activate>
        <button class="tab" class:active on:click={activate}>Tab #{tab}</button>
      </Tab>
    {/each}
    <div>
      {#each tabs as tab (tab)}
        <Panel let:active>
          <div style="display: {active ? 'block' : 'none'};">
            <div>Tab context #{tab}</div>
            <div>
              <div>Nested</div>
              <Tabs>
                {#each tabs as tab}
                  <Tab let:active let:activate>
                    <button class="tab" class:active on:click={activate}>Tab #{tab}</button>
                  </Tab>
                {/each}
                <div>
                  {#each tabs as tab (tab)}
                    <Panel let:active>
                      <div style="display: {active ? 'block' : 'none'};">
                        Nested tab context #{tab}
                      </div>
                    </Panel>
                  {/each}
                </div>
              </Tabs>
            </div>
          </div>
        </Panel>
      {/each}
    </div>
  </Tabs>
</div>
