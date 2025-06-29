// questionnaireConfig.js
export const questions = [
    {
        id: 'MinecraftID',
        type: 'text', // 文本填空
        label: '您的MinecraftID',
        placeholder: '请输入您的MinecraftID',
        required: true,
        description: '请填写您的MinecraftID，以便我们确认您不处于其他组织。',
    },
    {
        id: 'QQ',
        type: 'text',
        label: '您的QQ号',
        placeholder: '请输入您的QQ号',
        required: true,
        inputmode: 'numeric',
        pattern: '^\\d{5,11}$',
        description: '请填写您的QQ号，以便我们确认您已加入青金石蛋群。',
    },
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
];