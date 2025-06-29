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
    title: '会长' ,
    desc: '常年不在线的杂鱼会长……<br>欢迎来我的个人网站看看<br>第一个，别看错了' ,
    links: [
        { icon: 'wordpress', link: 'https://kimimaybe29.top'},
        { icon: 'github', link: 'https://github.com/Kimimaybe29' },
        { icon: 'bilibili', link: 'https://space.bilibili.com/504333259' },
        { icon: 'twitter', link: 'https://twitter.com/Kimimaybe29' },
    ]
    },
    {
    avatar:'../resource/avatar/1749393189-dajumps.png',
    name: 'dajumps',
    title: '幕后工程师' ,
    desc: '剧本制作，建筑制作，有问题可找我，有技术可教我' ,
    links: [
        { icon: 'bilibili', link: 'https://space.bilibili.com/381729071' },
    ]
    },
    ];
const coreMembers2 = [
    {
    avatar:'https://avatars.githubusercontent.com/u/80152431',
    name: 'SakuraGChiru',
    desc: '网站技术',
    links: [
        { icon: 'github', link: 'https://github.com/lorienyang' },
        { icon: 'vitepress', link: 'https://sakuraonline.cn' },
        { icon: 'bilibili', link: 'https://space.bilibili.com/473089208' },
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
    desc: '上班族偶尔在线' ,
    links: [
        { icon: 'bilibili', link: 'https://space.bilibili.com/244858902' },
    ]
    },
    {
    avatar:'../resource/avatar/1749393192-lanxiao1.png',
    name: 'lanxiao1',
    },
    {
    avatar:'../resource/avatar/1749393191-flxhaleimuye.png',
    name: 'flxhaleimuye',  
    desc: '讨厌人类',
    links: [
        { icon: 'bilibili', link: 'https://space.bilibili.com/353896344' },
        { icon: 'twitter', link: 'https://x.com/flxhaleimu1954' },
    ]
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
    {
    avatar: '../resource/avatar/1749393200-woaibailuya.jpg',
    name: 'woaibailuya',
    desc: '挖残骸专业户，缺残骸可以找我买<br>另外还是个狐娘厨',
    links: [
        { icon: 'bilibili', link:'https://space.bilibili.com/632469300' }
    ]
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
