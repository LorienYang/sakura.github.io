// questionnaireConfig.js
export const questions = [
    {
        id: 'minecraftID',
        type: 'text', // 文本填空
        label: '您的MinecraftID',
        placeholder: '请输入您的MinecraftID',
        required: true,
        description: '请填写您的MinecraftID，以便我们确认您不处于其他组织。',
    },
    {
        id: 'qqNumber',
        type: 'text',
        label: '您的QQ号',
        placeholder: '请输入您的QQ号',
        required: true,
        inputmode: 'numeric',
        pattern: '^\\d{5,11}$',
        description: '请填写您的QQ号，以便我们确认您已加入青金石蛋群。',
    },
    {
        id:'Q1',
        type: 'radio',
        label: '1. 樱花庄的故事《拾色世界：颜色残党》是否跟主线《拾色冒险》有直接关系？',
        options: [
            { value: 1 ,text:'无关'},
            { value: 0 ,text:'有关'}
        ],
        required: true,
    },
    {
        id:'Q2',
        type: 'radio',
        label: '2. 你是否阅读了《金蛋生存服用户指南》（官方文档）？',
        options: [
            { value: 1 ,text:'是'},
            { value: 0 ,text:'否'}
        ],
        required: true,
        description: '如果你还未阅读请先阅读<a href="https://page.eggs.gold/docs/mcs/Survive/lis" target="_blank" rel="noopener noreferrer">《金蛋生存服用户指南》</a>。',
    },
    {
        id:'Q3',
        type: 'radio',
        label: '3. 在阅读《拾色世界：颜色残党》的剧情后，你更支持？',
        options: [
            { value: 1 ,text:'超级无敌炫酷的暗影兵团'},
            { value: 1.01 ,text:'看起来一般般的色彩守卫'}
        ],
        required: true,
    },
    {
        id:'Q4',
        type: 'radio',
        label: '4. 在《拾色世界：颜色残党》中，如果是你，你愿意加入哪个组织？',
        options: [
            { value: 1 ,text:'暗影兵团'},
            { value: 1.01 ,text:'CID'}
        ],
        required: true,
    },
    {
        id:'Q5',
        type: 'radio',
        label: '5. 你擅长什么？',
        options: [
            { value: 1 ,text:'建筑'},
            { value: 1.01 ,text:'生电'},
            { value: 0.99 ,text:'其他'}
        ],
        required: true,
    },
    {
        id:'Q6',
        type: 'radio',
        label: '6. 在组织里，你最关注哪方面。',
        options: [
            { value: 1 ,text:'if线剧情和设定'},
            { value: 1.01 ,text:'组织的政策'},
            { value: 1.02 ,text:'组织在服务器里的情况'},
            { value: 0.99 ,text:'其他'}
        ],
        required: true,
    },
    {
        id:'Q7',
        type: 'radio',
        label: '7. 扮演角色时，你认为最重要的是什么？',
        options: [
            { value: 1 ,text:'保证角色的原汁原味'},
            { value: 1.01 ,text:'按照剧本设定严格把控剧情'},
            { value: 1.02 ,text:'尊重他人的看法去演绎自己的角色'},
            { value: 0.99 ,text:'负责演绎好自己就行'}
        ],
        required: true,
    },
    {
        id:'Q8',
        type: 'radio',
        label: '8. 你有兴趣补充IF线剧情或者提出自己的建议吗？',
        options: [
            { value: 1 ,text:'有'},
            { value: 0 ,text:'无'}
        ],
        required: true,
    },
    {
        id:'Q9',
        type: 'radio',
        label: '9. 进入组织后，你首先会干什么？',
        options: [
            { value: 1 ,text:'了解设定并去讨论'},
            { value: 1.01 ,text:'去服务器看看组织的情况'},
            { value: 1.02 ,text:'其他'}
        ],
        required: true,
    },
    {
        id:'Q10',
        type: 'radio',
        label: '10. 对你而言，组织最重要的是什么？',
        options: [
            { value: 1 ,text:'优秀的剧情设定'},
            { value: 1.01 ,text:'负责的管理成员'},
            { value: 1.02 ,text:'组织在服务器里的繁荣昌盛'},
            { value: 1.03, text:'组织成员的积极性和合作倾向'}
        ],
        required: true,
    },
    /*
    {
        id: 'age_group',
        type: 'radio', // 单选
        label: '您属于哪个年龄段？',
        options: [
            { value: 'under_18', text: '18岁以下' },
            { value: '18_30', text: '18-30岁' },
            { value: '31_45', text: '31-45岁' },
            { value: 'over_45', text: '45岁以上' },
        ],
        required: true,
    },
    {
        id: 'suggestions',
        type: 'textarea', // 多行文本填空
        label: '您对我们的产品有什么建议？',
        placeholder: '请在此处填写您的建议...',
        required: false,
    },
    {
        id: 'satisfaction',
        type: 'radio',
        label: '您对本次服务的整体满意度是？',
        options: [
            { value: 'very_satisfied', text: '非常满意' },
            { value: 'satisfied', text: '满意' },
            { value: 'neutral', text: '一般' },
            { value: 'dissatisfied', text: '不满意' },
        ],
        required: true,
    },
    {
        id: 'contact_email',
        type: 'text', // 文本填空，例如邮箱
        label: '您的联系邮箱（可选）',
        placeholder: '便于我们后续与您沟通',
        required: false,
    },
     */
];
