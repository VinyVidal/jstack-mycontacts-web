class CategoryMapper {
  toPersistence(category) {
    return category;
  }

  toDomain(category) {
    return {
      id: category.id,
      name: category.name,
    }
  }
}

export default new CategoryMapper;
