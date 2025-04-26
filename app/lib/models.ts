import { Model } from "@/app/types"
import { models } from "@/app/data/models"

export async function getAllModels(): Promise<Model[]> {
    const modelsData: Model[] = models;
    return modelsData
}

export async function getModelById(id: string | number): Promise<Model> {
    // These functions don't technically need to be async functions,
    // but we're planning for the future when they'll be fetching
    // from a real data source.
    const foundModel = models.find(
        (model: Model) => model.id.toString() === id.toString()
    )
    if (!foundModel) {
        throw new Error(`Model with id ${id} not found`)
    }
    return foundModel
}
