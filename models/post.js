module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define("Post", {
    authorId: { field: 'authorId', type: DataTypes.STRING(11), unique: false, allowNull: false },
    status: { field: 'status', type: DataTypes.STRING(255), allowNull: true },
  }, {
    underscore: true,
    freezeTableName: true,
    tableName: "Post"
  })

  return post;
}