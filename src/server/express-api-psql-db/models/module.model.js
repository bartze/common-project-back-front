module.exports = (sequelize, Sequelize) => {
    const Module = sequelize.define('Module', {
        title: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        published: {
            type: Sequelize.BOOLEAN,
        },
    });

    return Module;
};
