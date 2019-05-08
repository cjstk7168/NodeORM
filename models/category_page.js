module.exports = (sequelize, DataTypes) => {
  const category_page = sequelize.define("CategoryPage", {
    category_id: { field: 'category_id', type: DataTypes.STRING(11), unique: false, allowNull: false },
    show_at: { field: 'show_at', type: DataTypes.DATE, allowNull: true },
    hide_at: { field: 'hide_at', type: DataTypes.DATE, allowNull: true },
  }, {
    underscore: true,
    freezeTableName: true,
    tableName: "category_page"
  })

  return category_page;
}