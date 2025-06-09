---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme';

const coreMembers = [
    {
    avatar:'../resource/avatar/1749393192-Kimimustbe29.png',
    name: 'Kimimustbe29',
    desc: '常年不在线的会长……<br>也来Linking-ET试试喵',
 links: [
    { icon: 'github', link: 'https://github.com/Kimimaybe29' },
    { icon: 'bilibili', link: 'https://space.bilibili.com/504333259' },
    ]
    },
    {
    avatar:'../resource/avatar/1749393189-dajumps.png',
    name: 'dajumps',
    },
];
const coreMembers2 = [
    {
    avatar:'../resource/avatar/1749393195-SakuraGaChiru.png',
    name: 'SakuraGChiru',
    desc: '网站提供者',
links: [
    { icon: 'github', link: 'https://github.com/star-moon-night' },
    ]
    },
    {
    avatar:'../resource/avatar/1749393194-NU_LI_.png',
    name: 'NU_LI_',
    },
    {
    avatar:'../resource/avatar/1749393194-N0HAb1tor.png',
    name: 'N0HAb1tor',
    },
];
const teamMembers = [
    {
    avatar:'../resource/avatar/1749393197-YWDD522.png',
    name: 'YWDD522',
    desc: '服内小登……<br>经常会有一些稀奇古怪的点子'
    },
    {
    avatar:'../resource/avatar/1749393191-Gestaltqwq.png',
    name: 'Gestaltqwq',
    },
    {
    avatar:'../resource/avatar/1749393193-Lemeng01.png',
    name: 'Lemeng01',
    },
    {
    avatar:'../resource/avatar/1749393192-lanxiao1.png',
    name: 'lanxiao1',
    },
    {
    avatar:'../resource/avatar/1749393191-flxhaleimuye.png',
    name: 'flxhaleimuye',
    },
    {
    avatar:'../resource/avatar/1749393190-Doxina.png',
    name: 'Doxina',
    desc: '屏幕前的彦祖们能pay我50cc吗<br>qwq'
    },
    {
    avatar:'../resource/avatar/1749393188-AiXIngJueLuoyue.png',
    name: 'AiXIngJueLuoyue',
    },
    {
    avatar:'../resource/avatar/1749393190-Exploded_Creeper.png',
    name: 'Exploded_Creeper',
    },
];
const Lost = []
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>樱花庄 成员花名册</template>
    <template #lead>记录了樱花庄所有的玩家<br>持续更新中</template>
  </VPTeamPageTitle>
<VPTeamPageSection>
    <template #title>常任理事会成员列表</template>
    <template #members>
      <VPTeamMembers size="medium" :members="coreMembers" />
    </template>
</VPTeamPageSection>
<VPTeamPageSection>
    <template #title>非常任理事会成员列表</template>
    <template #members>
      <VPTeamMembers size="small" :members="coreMembers2" />
    </template>
</VPTeamPageSection>
<VPTeamPageSection>
    <template #title>普通成员列表</template>
    <template #members>
      <VPTeamMembers size="small" :members="teamMembers" />
    </template>
</VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>已离开的玩家</template>
    <template #lead>即便你已离开，我们依旧记得你</template>
    <template #members>
      <VPTeamMembers size="small" :members="Lost" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
