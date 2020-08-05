cube(`Users`, {
    sql: `SELECT * FROM users WHERE deleted = 0`,

    joins: {
        Reactions: {
            relationship: `hasMany`,
            sql: `${Users}.id = ${Reactions}.user_id`
        }
    },

    measures: {
        count: {
            type: `count`,
        }
    },

    dimensions: {
        id: {
            sql: `id`,
            type: `string`,
            primaryKey: true
        },
        name: {
            sql: `name`,
            type: `string`
        },
        real_name: {
            sql: `real_name`,
            type: `string`
        },
        image: {
            sql: `image_512`,
            type: `string`
        },
        is_admin: {
            sql: `is_admin`,
            type: `boolean`
        }
    },

    segments: {
        admin: {
            sql: `${Users}.is_admin = 1`
        },
        regular: {
            sql: `${Users}.is_admin = 0`
        }
    }
});
