import {Categories, CategoriesModel} from "../entities/Categories";



export async function seedDatabase() {
    const categories = await new CategoriesModel(
        [
            {
                id: 1,
                name: "Bird1",
                description: "A romantic raspberry's plum comes with it the thought that the practical camel",
            },
        ] as unknown as Categories).save();

  
    return {
        categories,
    };
  }